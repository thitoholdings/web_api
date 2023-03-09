import { handleInsert , handleQuery , handleSelect, handleSelectJoin, handleUpdate } from "../../utils/handle.js"
import catchErrors from "../../errors/catchErrors.js"
import time from "../../utils/getCurrentTime.js"
import moment from 'moment'
import _ from "lodash"


export const createNotification  = catchErrors(async (req ,res)=>{
    let noteBody = req.body
    noteBody["createdAt"] = moment().format('YYYY-MM-DD HH:mm:ss')
    noteBody['userId'] = req.user.ID 
    const notification  = await handleInsert(noteBody , "notifications")
    res.send(notification)
})

export const sendNotification = catchErrors(async (req,res)=>{

})

export const setReadNotification = catchErrors(async (req,res)=>{
    const setToRead = handleUpdate({isRead:"true" , readAt:moment().format('YYYY-MM-DD HH:mm:ss')} ,{userId:req.user.ID} , "notifications")
    res.send(setToRead)
})

export const getNotifications = catchErrors(async (req,res)=>{
    const query =`select notifications.id , notifications.body , notifications.isRead ,notifications.createdAt , notifications.readAt , issues.title , issues.status , issues.type, issues.id from notifications join issues on issues.id = notifications.issueId where notifications.userId=${req.user.ID}`
   const notifications = await handleQuery(query)
   
    res.send(notifications)
})

export async function getSupervisor(department){
    console.log('Department: '+ department)
    const query = `SELECT * FROM boprita_credit.StaffAccount_0
    join helpdesk.departments on helpdesk.departments.id = StaffAccount_0.departmentId
    where helpdesk.departments.department= '${department}' and system_role= 'supervisor'`

    const supervisor = await handleQuery(query)
   
    if(supervisor.length <= 0) return null

    return supervisor[0]
}


export async function getRecievers(issueId){
    const recieversQuery = `select  staff.ID ,staff.first_name, staff.last_name,staff.email_address ,staff.system_role , staff.departmentId from helpdesk.comments
    JOIN boprita_credit.StaffAccount_0 as staff
    ON helpdesk.comments.userId = staff.ID
    where helpdesk.comments.issueId = ${issueId}
    union
    select staff.ID ,staff.first_name, staff.last_name,staff.email_address ,staff.system_role , staff.departmentId from helpdesk.issues
        JOIN boprita_credit.StaffAccount_0 as staff
        ON helpdesk.issues.userId = staff.ID
        where helpdesk.issues.id =${issueId}
    order by email_address`

    const allRecievers = await handleQuery(recieversQuery)

    const recievers =_.union(allRecievers)

    return [...new Set(recievers)]
    
}
export async function getMentionRecievers(issueId , mentions){

    var mentionQuery=`SELECT * FROM boprita_credit.StaffAccount_0 where email_address = '${mentions[0]}'`
    if(mentions.length==1){
        mentionQuery = `SELECT * FROM boprita_credit.StaffAccount_0 where email_address = '${mentions[0]}'`
    }else{
        for(var i=1; i<mentions.length; i++ ){
            mentionQuery+=` or email_address='${mentions[i]}'`
        }
    }

    const commentersQuery = mentionQuery

    const issueOwnerQuery = `select * from helpdesk.issues
    JOIN boprita_credit.StaffAccount_0
    ON helpdesk.issues.userId = boprita_credit.StaffAccount_0.ID
    where helpdesk.issues.id =${issueId}`

    const allCommenters = await handleQuery(commentersQuery)
    const issueOwner  = await handleQuery(issueOwnerQuery)

    const recievers =_.union(allCommenters , issueOwner)

    return [...new Set(recievers)]
    
}


export async function getDepartment(dept){
    const departmentInfoQuery = `SELECT * FROM boprita_credit.StaffAccount_0 as staff
    join helpdesk.departments as helpd
    on staff.departmentId = helpd.id
    where sub_department ="${dept}" and system_role != 'supervisor'`

    const departmentInfo = await handleQuery(departmentInfoQuery)

    return [...new Set(departmentInfo)]
}
