import {
  handleInsert,
  handleQuery,
  handleSelect,
  handleUpdate,
} from "../../utils/handle.js";
import catchErrors from "../../errors/catchErrors.js";
import { getMentionRecievers, getRecievers } from "../notifications/index.js";
import { getSingleIssue } from "../issues/index.js";
import moment from "moment";
import sendEmail from "../../utils/sendEmail.js";
function getUniqueListByKey(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

export const createComment = catchErrors(async (req, res) => {
  let commentBody = req.body;
  commentBody["createdAt"] = moment().format("YYYY-MM-DD HH:mm:ss");
  commentBody["userId"] = req.user.ID;
  let mentions = commentBody.mentions;
  delete commentBody["mentions"];
  const comment = await handleInsert(commentBody, "comments");
  const sendComment = await sendCommentNote(
    req.user,
    commentBody.issueId,
    commentBody.body,
    mentions
  );
  res.send(comment);
});

export const editComment = catchErrors(async (req, res) => {
  const { id, body } = req.body;
  let updateBody = { body };
  updateBody["updatedAt"] = moment().format("YYYY-MM-DD HH:mm:ss");
  const editedComment = await handleUpdate(updateBody, { id }, "comments");
  res.send(editedComment);
});

export const likeComment = catchErrors(async (req, res) => {
  const { commentId, likes, liker, issueId, owner_email, like } = req.body;
  const commentLikes = JSON.stringify(req.body.likes);
  const user = {
    ID: liker.ID,
    first_name: liker.first_name,
    email_address: owner_email,
  };
  const query = `update helpdesk.comments
  set likes = '${commentLikes}'
  where id =${commentId}`;
  console.log(`Comment like action ${commentId}`);
  const likeAcomment = await handleQuery(query);
  const insertIntoNotification = await sendLikeEmail(
    liker,
    user,
    issueId,
    like
  );
  res.send(likeAcomment);
});
export const getAllComments = catchErrors(async (req, res) => {
  const query = `select * from helpdesk.comments join boprita_credit.StaffAccount_0
    on helpdesk.comments.userId = boprita_credit.StaffAccount_0.ID`; //REMOVE PASSWORD
  const allComments = await handleQuery(query);
  res.send(allComments);
});
export const getCommentsForIssue = catchErrors(async (req, res) => {
  const query = `select * from helpdesk.comments join boprita_credit.StaffAccount_0
    on helpdesk.comments.userId = boprita_credit.StaffAccount_0.ID where helpdesk.comments.issueId = ${req.params.issueId}`;
  const comments = await handleQuery(query);
  res.send(comments);
});
function replyCommentNote(user_name) {
  return `${user_name} added a comment to an issue you're following`;
}
async function checkReply(issueId) {
  const replies = await handleSelect({ issueId }, "comments");

  if (replies.length > 0) return true;

  return false;
}

async function sendLikeEmail(liker, user, issueId, like) {
  if (like === "unlike") return;
  let body = `${liker.first_name} has liked your comment`;
  const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
  const issue = await getSingleIssue(issueId);
  const doesNotExist = await handleQuery(
    `select * from helpdesk.notifications where body='${body}' and issueId =${issueId} and userId =${user.ID};`
  );
  console.log("does not exists");
  const insertQuery = `INSERT INTO helpdesk.notifications (body, issueId, userId, isRead ,createdAt)
  VALUE ('${body}', ${issueId},${user.ID} , 'false',date('${createdAt}') )`;
  console.log(insertQuery);
  if (!doesNotExist) {
    const insertIntoNotification = await handleQuery(insertQuery);
    const mail = {
      note: {
        body,
        issue,
        comment: "",
      },
      email_address: user.email_address,
      comment: "",
      issue: "comment",
    };
    const sendMail = await sendEmail(mail);
  }
}

async function sendCommentNote(user, issueId, comment, mentions) {
  let body = replyCommentNote(user.first_name, issueId);
  const issue = await getSingleIssue(issueId);
  const emails = [];
  let mentionRecievers = [];
  if (mentions) {
    mentionRecievers = (await getMentionRecievers(issueId, mentions)).filter(
      (reciever) => reciever.ID != user.ID
    );
  }

  const recievers = (await getRecievers(issueId)).filter(
    (reciever) => reciever.ID != user.ID
  );

  const allRecords = [...new Set(recievers.concat(mentionRecievers))].map(
    (rec) => ({
      first_name: rec.first_name,
      last_name: rec.last_name,
      email_address: rec.email_address,
      ID: rec.ID,
    })
  );

  const insertRecievers = [
    ...new Set(getUniqueListByKey(allRecords, "email_address")),
  ].map(async (item) => {
    const name = item.first_name + " " + item.last_name;
    if (comment.includes(name)) {
      body = `${user.first_name} mentioned you in a comment.`;
    }
    if (comment.split(" ").includes("liked")) {
      body = comment;
    }

    const mail = {
      note: {
        body,
        issue,
        comment,
      },
      email_address: item.email_address,
      comment,
      issue: "comment",
    };
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
    const insertData = {
      body,
      userId: item.ID,
      issueId,
      createdAt,
    };
    const sendMail = await sendEmail(mail);
    const insertNote = await handleInsert(insertData, "notifications");
    return insertNote;
  });

  Promise.all(insertRecievers);
}
