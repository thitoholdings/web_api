import { handleQuery } from "../../utils/handle.js";


async function getActiveUsers(){
    const users  = await handleQuery(`SELECT ID ,first_name ,last_name ,email_address , helpdesk_profile , socketId FROM boprita_credit.StaffAccount_0 where active = 'true'`)
    return users

}

async function activateUser(ID ,socketId){

    const updateUsers = await handleQuery(`update boprita_credit.StaffAccount_0 set active = 'true' , socketId ='${socketId}' where ID=${ID}`)

    return updateUsers

}

async function deactivateUser(socketId){
    const updateUsers = await handleQuery(`update boprita_credit.StaffAccount_0 set active = 'false' where socketId ='${socketId}'`)

    return updateUsers

}

export {getActiveUsers ,activateUser ,deactivateUser}