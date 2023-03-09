import {
  handleInsert,
  handleQuery,
  handleUpdate,
  handleSelect,
  handleSelectJoin,
} from "../../utils/handle.js";
import catchErrors from "../../errors/catchErrors.js";

export const getDepartments = catchErrors(async (req, res) => {
  const department = await handleSelect(null, "departments");
  const users = await handleQuery(`SELECT first_name , last_name ,helpdesk_profile , departmentId FROM boprita_credit.StaffAccount_0
  where departmentId != '' and helpdesk_profile != 'https://joeschmoe.io/api/v1/random'`)
  

  res.send(
    department.map(item =>{
      var userArr = users.filter(user => user.departmentId == item.id)
      if(userArr) item['users']=userArr
      return item
    })
  );
});

//getting the system where the issues are
export const getIssueSystems = catchErrors(async (req, res) => {
  const system = await handleQuery('select * from helpdesk.systems order by issue_system');
  res.send(system);
});

export const getCompanies  = catchErrors(async (req,res)=>{
  const companies = await handleSelect(null, 'companies');
  res.send(companies);
})
