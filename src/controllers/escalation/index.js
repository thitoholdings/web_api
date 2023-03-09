import { handleInsert , handleQuery , handleUpdate , handleSelect , handleSelectJoin } from "../../utils/handle.js"
import catchErrors from "../../errors/catchErrors.js"
import time from "../../utils/getCurrentTime.js"


export const escalateIssue  = catchErrors(async (req , res) =>{
    const { issueId ,escalationNote } = req.body
    const data = {
        escalated : "true",
        escalation: JSON.stringify({ datetime : time , escalationNote })
    }
    const conditions = {
            id: issueId
    }

    const escalation  = await handleUpdate(data ,conditions , "issues")
    
    res.send(escalation)
})

export const deEscalateIssue = catchErrors(async (req,res)=>{

    const {issueId} = req.body

    const deEscalation = await handleUpdate({escalated:"false"} ,{id:issueId} ,"issues")

    res.send(deEscalation)

})

export const getEscalatedIssues = catchErrors(async (req,res)=>{

    const escalatedIssues = await handleSelect({escalated:'true'} ,"issues")

    res.send(escalatedIssues)

})




/**
 *  escalation : {
 *      issueId:1
 *      escalationNote:"This issue has been unresolved for Months"
 *      userId: 1
 * }
 * 
 */