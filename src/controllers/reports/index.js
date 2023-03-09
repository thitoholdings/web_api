import catchErrors from "../../errors/catchErrors.js"
import { handleQuery } from "../../utils/handle.js"

//LINE GRAPH
const issuesPerMonths = `SELECT  DATE_FORMAT(createdAt, "%M %d") as Months , count(title) as count from helpdesk.issues
group by DATE_FORMAT(createdAt, "%M %d")
order by createdAt`

//MULTIPLE LINES 
const issuesPerMonthsDept = `SELECT  DATE_FORMAT(createdAt, "%M %d") as Months , count(title) as count , type from helpdesk.issues
group by DATE_FORMAT(createdAt, "%M %d"), type
order by createdAt`


//statistics relating to all progress statges
const progress = `SELECT  status , count(title) as count from helpdesk.issues
group by status
order by status`

//PIE CHART
/**A break down of the number of issues in each progress stage */
const IssuesProgressPerTeam = `SELECT type , sum(case when status ='Done' then 1 else 0 end) as Done,
sum(case when status ='In Progress' then 1 else 0 end) as InProgress,
sum(case when status ='To do' then 1 else 0 end) as Todo 
from helpdesk.issues group by type`

//BAR GRAPH
/**A break done of all issues posted by each department */
const issuesFromDepartments = `select dpt.sub_department as Department , count(ish.title) as count from helpdesk.issues as ish
join boprita_credit.StaffAccount_0 as staff
on staff.ID = ish.userId
join helpdesk.departments as dpt
on dpt.id = staff.departmentId
group by dpt.sub_department`

//BAR GRAPH WITH SECTIONS
/** An break of how many issues are in each progress stage by department */
const issueProgressIssuers = `select dpt.sub_department as type , 
sum(case when ish.status ='Done' then 1 else 0 end) as Done,
sum(case when ish.status ='In Progress' then 1 else 0 end) as InProgress,
sum(case when ish.status ='To do' then 1 else 0 end) as Todo ,
count(ish.title) as Total
 from helpdesk.issues as ish
join boprita_credit.StaffAccount_0 as staff
on staff.ID = ish.userId
join helpdesk.departments as dpt
on dpt.id = staff.departmentId
group by dpt.sub_department
`

export const getReports = catchErrors(async (req,res) => {
    const progressPerTeam = await handleQuery(IssuesProgressPerTeam)
    const issueByDepartment = await handleQuery(issuesFromDepartments)
    const progressPerIssuer = await handleQuery(issueProgressIssuers)
    const issuesPerMonth = await handleQuery(issuesPerMonths)
    const progressAll = await handleQuery(progress)
    const issuesDept = await handleQuery(issuesPerMonthsDept)

    res.send({progressPerTeam , issueByDepartment ,progressPerIssuer ,issuesPerMonth , issuesDept ,progressAll })
  })






