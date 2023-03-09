import {
  handleInsert,
  handleQuery,
  handleUpdate,
  handleSelect,
  handleSelectJoin,
} from "../../utils/handle.js";
import catchErrors from "../../errors/catchErrors.js";
import _ from "lodash";
import {
  getDepartment,
  getRecievers,
  getSupervisor,
} from "../notifications/index.js";

//import sendEmail from "../../utils/sendGridEmail.js";
import uploadPhoto from "../../utils/uploadPhoto.js";
import parser from "node-html-parser";
import moment from "moment";
import sendEmail from "../../utils/sendEmail.js";
import aws_upload from "../../utils/aws_upload.js";

async function uploadImgHtml(html) {
  let htm = html;
  //var Img = description.match(/<img([\w\W]+?)>/g)[0];
  var describe = html;

  while (htm.match(/<img([\w\W]+?)>/g)[0]) {
    const result = parser
      .parse(htm.match(/<img([\w\W]+?)>/g)[0])
      .querySelector("img")
      .getAttribute("src");
    if (result == "" || result == " ") return describe;
    //const imgLink = await uploadPhoto(result.toString("base64"));
    const type = result.toString("base64").split(";")[0].split("/")[1];
    const imgLink = await aws_upload({
      filename: `image.${type}`,
      file: result.toString("base64"),
    });
    describe = describe.replace(result, imgLink.url);
    htm = htm.replace(result, "");
  }

  console.log("Done with Image Link");
  return describe;
}

export const updateDeadline = catchErrors(async (req, res) => {
  const { id, deadline } = req.body;
  const update = await handleUpdate({ deadline }, { id }, "issues");
  res.send(update);
});

export const getDepartmentAccounts = catchErrors(async (req, res) => {
  const department =
    await handleQuery(`SELECT StaffAccount_0.ID ,first_name , last_name ,email_address , helpdesk_profile , sub_department  FROM boprita_credit.StaffAccount_0
    join helpdesk.departments
    on boprita_credit.StaffAccount_0.departmentId = helpdesk.departments.id`);

  res.send(department);
});

export const createIssue = catchErrors(async (req, res) => {
  let bod = req.body; // do not allow editing other fields as well
  bod["createdAt"] = moment().format("YYYY-MM-DD HH:mm:ss");
  const {
    title,
    type,
    status,
    priority,
    departmentId,
    description,
    assignee,
    systemId,
    deadline,
    companyId,
    attachments,
    deadlineType,
    review,
  } = bod;
  const userId = req.user.ID;
  var describe = description;
  var Img = description.match(/<img([\w\W]+?)>/g);
  const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
  if (Img) {
    describe = await uploadImgHtml(description);
  }

  const systemID = type == "TASK" ? 46 : systemId;
  let issue;

  if (type == "TASK") {
    issue = await handleInsert(
      {
        title,
        type,
        status,
        priority: "High",
        departmentId,
        description: describe,
        assignee,
        userId,
        systemId: systemID,
        createdAt,
        deadline: deadline ? deadline : moment().format("YYYY-MM-DD HH:mm:ss"),
        companyId,
        deadlineType,
      },
      "tasks"
    );
  } else {
    issue = await handleInsert(
      {
        title,
        type,
        status,
        priority: "High",
        departmentId,
        description: describe,
        assignee,
        userId,
        systemId: systemID,
        createdAt,
        attachments: attachments.toString(),
        review,
      },
      "issues"
    );
  }

  const note = `${req.user.first_name} has added an issue to your deparment`;
  const noteSup = `${req.user.first_name} has added an issue from your department`;
  const issueMail = (await handleSelect({ id: issue.insertId }, "issues"))[0];
  const taskNote = ` ${req.user.first_name} has assigned you a task/issue.`;

  const sendcreatenote = await sendCreateNotifications(
    req,
    type,
    note,
    issue,
    issueMail,
    noteSup,
    assignee,
    taskNote
  );

  res.send(issue);
});

//SEND NOTIFICATION METHODS
async function sendCreateNotifications(
  req,
  type,
  note,
  issue,
  issueMail,
  noteSup,
  assignee,
  taskNote
) {
  if (type == "TASK" || assignee != 0)
    return await sendToAssignee(assignee, taskNote, issue.insertId, issueMail);

  const sendNoteMail = await sendToDepartment(
    type,
    note,
    req.user.ID,
    issue.insertId,
    issueMail
  );
  const sendSupervisor = await sendToSupervisor(
    req.user.department,
    noteSup,
    issueMail
  );

  return { sendNoteMail, sendSupervisor };
}
export const editIssue = catchErrors(async (req, res) => {
  const { id } = req.body;
  let update = req.body;
  update["updatedAt"] = moment().format("YYYY-MM-DD HH:mm:ss");
  const editedIssue = await handleUpdate(
    _.omit(update, "id"),
    { id },
    "issues"
  );
  res.send(editedIssue);
});

function filterJSON() {
  var result = jsObjects.filter((obJ) => {
    return obj.b === 6;
  });
}

export const getAllIssues = catchErrors(async (req, res) => {
  const query = `SELECT * FROM helpdesk.issues
  join boprita_credit.StaffAccount_0
  on boprita_credit.StaffAccount_0.ID = helpdesk.issues.userId`;

  const issuerQuery = `select issuer.first_name , issuer.last_name , issuer.email_address, issuer.department , issuer.helpdesk_department , issuer.helpdesk_profile  ,
  issue.id AS 'issueID'
  from boprita_credit.StaffAccount_0 issuer
  JOIN helpdesk.issues issue ON issuer.ID = issue.assignee`;

  const systemQuery = `SELECT helpdesk.issues.* ,boprita_credit.StaffAccount_0.* ,helpdesk.issues.departmentId as issueDepartmentId ,dept.department as mydepartment ,dept.sub_department ,dept.backlog ,sys.issue_system FROM helpdesk.issues
  join boprita_credit.StaffAccount_0 
  on boprita_credit.StaffAccount_0.ID = helpdesk.issues.userId  
  join helpdesk.departments as dept
  on dept.id = helpdesk.issues.departmentId
  join helpdesk.systems as sys
  on sys.id = helpdesk.issues.systemId
  union
  SELECT helpdesk.tasks.* ,boprita_credit.StaffAccount_0.* ,helpdesk.tasks.departmentId as issueDepartmentId ,dept.department as mydepartment ,dept.sub_department ,dept.backlog ,sys.issue_system FROM helpdesk.tasks
  join boprita_credit.StaffAccount_0 
  on boprita_credit.StaffAccount_0.ID =helpdesk.tasks.userId  
  join helpdesk.departments as dept
  on dept.id = helpdesk.tasks.departmentId
  join helpdesk.systems as sys
  on sys.id = helpdesk.tasks.systemId`;

  const companyQuery = "select * from helpdesk.companies";

  const assignee = `SELECT staff.ID, staff.first_name, staff.helpdesk_profile ,staff.last_name , staff.email_address , issue.ID as issueID FROM helpdesk.issues as issue
  join boprita_credit.StaffAccount_0 as staff on issue.assignee = staff.ID
UNION
SELECT staff.ID, staff.first_name ,staff.last_name ,  staff.helpdesk_profile, staff.email_address , task.ID as issueID FROM helpdesk.tasks as task
  join boprita_credit.StaffAccount_0 as staff on task.assignee = staff.ID
  `;

  const issues = await handleQuery(systemQuery);
  const issuer = await handleQuery(issuerQuery);
  const assignees = await handleQuery(assignee);
  const companies = await handleQuery(companyQuery);

  res.send(
    issues.map((item) => {
      delete item.password;
      var issuerDetails = issuer.filter((ish) => ish.issueID === item.id)[0];
      if (issuerDetails) item["issuer"] = issuerDetails;
      var assigneeDetails = assignees.filter(
        (ass) => ass.issueID == item.id
      )[0];
      if (assigneeDetails) item["assigneeDetails"] = assigneeDetails;
      var companyDetails = companies.filter((co) => co.id == item.companyId)[0];
      if (companyDetails) item["company"] = companyDetails;
      return item;
    })
  );
});

export const getIssuesWithUsersAndComments = catchErrors(async (req, res) => {
  const join = ["comments", "issues"];
  const info = await handleSelectJoin(null, join, "users");
  res.send(info);
});

export async function getSingleIssue(issueId) {
  const issueQuery = `SELECT * from helpdesk.issues where id = ${issueId}`;
  const issue = await handleQuery(issueQuery);
  console.log(`ISSUE: ${issue[0]}  ISSUEID: ${issueId}`);
  return issue[0];
}

export const getIssueAndComment = catchErrors(async (req, res) => {
  const join = ["comments"];
  const id = req.params.id; //CLIENT
  const info = await handleSelectJoin({ id }, join, "issues");
  res.send(info);
});

export const changeStatus = catchErrors(async (req, res) => {
  const { id, status } = req.body;
  const closedAt = moment().format("YYYY-MM-DD HH:mm:ss");
  if (status === "Done") {
    const updateFields = req.body.source ? { status } : { status, closedAt };
    const newStatus = await handleUpdate(updateFields, { id }, "issues");
    res.send(newStatus);
  }

  if (status === "Review") {
    const assignee = req.user.ID;
    const closedAt = moment().format("YYYY-MM-DD HH:mm:ss");
    const newStatus = await handleUpdate(
      { status, assignee, closedAt },
      { id },
      "issues"
    );
    res.send(newStatus);
  }
  if (status == "In progress") {
    const assignee = req.user.ID;
    const newStatus = await handleUpdate(
      { status, assignee },
      { id },
      "issues"
    );
    res.send(newStatus);
  } else if (status == "To do") {
    const newStatus = await handleUpdate({ status }, { id }, "issues");
    res.send(newStatus);
  }
  if (status == "Backlog") {
    const newStatus = await handleUpdate({ status }, { id }, "issues");
    res.send(newStatus);
  }
  const issue = (await handleSelect({ id }, "issues"))[0];
  const note = `This issue has been moved to ${status.toUpperCase()}`;
  const sendNoteMail = await sendToRecievers(id, note, req.user.ID, issue);
});

export const uploadImage = catchErrors(async (req, res) => {
  const link = await uploadPhoto(req.body.file);
  res.send(link);
});

async function sendToSupervisor(department, note, issueMail) {
  const supervisor = await getSupervisor(department);

  console.log("Supervisor => " + supervisor);

  if (supervisor) {
    console.log("Send Email");
    const mail = {
      note,
      email_address: supervisor.email_address,
      issue: issueMail,
    };
    const sendMail = await sendEmail(mail);
  }
}

async function sendToDepartment(dept, note, userId, issueId, issueMail) {
  const deptInfo = await getDepartment(dept);

  const sent = deptInfo.map(async (item) => {
    const mail = {
      note,
      email_address: item.email_address,
      issue: issueMail,
    };
    if (item.ID != userId) {
      const sendMail = await sendEmail(mail);
      const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
      const insertNotification = await handleInsert(
        { body: note, userId, issueId, createdAt },
        "notifications"
      );
      return sendMail;
    }
  });

  Promise.all(sent).catch((err) => console.log(err));
}

async function sendToAssignee(userId, note, issueId, issueMail) {
  const email = (
    await handleQuery(
      `SELECT * FROM boprita_credit.StaffAccount_0 where ID = ${userId}`
    )
  )[0].email_address;

  const mail = {
    note,
    email_address: email,
    issue: issueMail,
  };
  const sendmail = await sendEmail(mail);
  const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
  const insertNotification = await handleInsert(
    { body: note, userId, issueId, createdAt },
    "notifications"
  );
}

async function sendToRecievers(issueId, note, userId, description) {
  let recievers = await getRecievers(issueId);

  if (note.match("This issue has been moved")) {
    recievers = recievers.filter((user) => user.helpdesk_role != "IT");
  }

  const sendToRec = recievers.map(async (item) => {
    const mail = {
      note,
      email_address: item.email_address,
      issue: description,
    };
    const sendMail = await sendEmail(mail);
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
    const insertNotification = await handleInsert(
      { body: note, userId: item.ID, issueId, createdAt },
      "notifications"
    );
    return insertNotification;
  });

  Promise.all(sendToRec).catch((err) => console.log(err));
}
