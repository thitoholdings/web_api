import express from "express"
import * as issues from "../../controllers/issues/index.js"
import authenticateToken from "../../middleware/authentication.js"
import * as escalation from "../../controllers/escalation/index.js"


const issuesRouter = express.Router()

issuesRouter.post("/createIssue" ,authenticateToken , issues.createIssue)
issuesRouter.post("/editIssue" ,issues.editIssue)
issuesRouter.post("/changeIssueStatus", authenticateToken , issues.changeStatus)
issuesRouter.get("/getAllIssues" , issues.getAllIssues)
issuesRouter.get("/getIssuesWithUsersAndComments" ,authenticateToken ,issues.getIssuesWithUsersAndComments)
issuesRouter.get("/getIssueAndComment/:id" ,authenticateToken ,issues.getIssueAndComment)
issuesRouter.post("/escalateIssue" ,escalation.escalateIssue )
issuesRouter.post("/uploadImage" , issues.uploadImage )
issuesRouter.post("/updateDeadline",authenticateToken ,issues.updateDeadline)
issuesRouter.get("/getDepartments", authenticateToken ,issues.getDepartmentAccounts)


export default issuesRouter

