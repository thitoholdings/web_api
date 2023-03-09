import { handleSelect } from "../../utils/handle";

export function createBody(params) {
  const { user, status, object, action, issueId } = params;
  const key = action + " " + object;

  switch (key) {
    case "UPDATE ISSUE":
      return updateIssueNote(user);
    case "CREATE ISSUE":
      return createIssueNote(user);
    case "REPLY COMMENT":
      return replyCommentNote(user, issueId);
    case "ESCALATE ISSUE":
      return escalateIssue(user);
    case "CHANGE ISSUE_STATUS":
      return changeOfStatus(status);
    default:
      break;
  }
}

async function updateIssueNote(user) {
  return `${user} updated his/her issue`;
}
function createIssueNote(user) {
  return `${user} created an issue for our department`;
}

function escalateIssue(user) {
  return `${user} escalated an issue`;
}
function changeOfStatus(status) {
  return `Issue has been moved to ${status}`;
}
