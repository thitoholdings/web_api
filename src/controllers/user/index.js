import {
  handleInsert,
  handleQuery,
  handleUpdate,
  handleAuthentication,
  handleSelect,
} from "../../utils/handle.js";
import catchErrors from "../../errors/catchErrors.js";
import { signToken } from "../../utils/authToken.js";
import cryptojs from "crypto-js";
import { sendResetPasswordEmail } from "./utils.js";
import aws_upload from "../../utils/aws_upload.js";

export const createUser = catchErrors(async (req, res) => {
  const {first_name , last_name , email_address ,departmentId} = req.body
 // console.log('Email: '+email_address)
  const exists =await handleQuery(`select * from boprita_credit.StaffAccount_0 where email_address = '${email_address}' `)
  const query =`INSERT INTO boprita_credit.StaffAccount_0 (first_name, last_name, email_address, system_role, department, password, access, office, creation_date, helpdesk_profile, departmentId) 
  VALUES ('${first_name}', '${last_name}', '${email_address}', 'service_desk', 'Thito Holdings', 'l7Puw5KCVCsS23pLpYM0ZQMscmETOPs1DFq5tWfdRMw=', 'false', 'true', '8-4/2022', 'https://joeschmoe.io/api/v1/random', '${departmentId}');
  `

  if(exists.length>0){
    console.log(exists.length + " User already exists")
    res.status(500).send({error:'This user aready exists'})
  }
  else {
    const user = await handleQuery(query);
    res.send(user);
  }

});
export const sendOTP = catchErrors(async (req, res) => {
  const val = Math.floor(1000 + Math.random() * 9000);
  const emailRecords = await handleQuery(
    `select * from boprita_credit.StaffAccount_0 where StaffAccount_0.email_address='${req.body.email}'`
  );

  if (emailRecords.length > 0) {
    sendResetPasswordEmail(req.body.email, val)
      .then(() => res.send({ OTP: val, exists: true, page: "forgot" }))
      .catch(console.log);
  } else {
    res.send({ OTP: null, exists: false, page: "login" });
  }
});

export const resetPassword = catchErrors(async (req, res) => {
  const { password, email } = req.body;

  const encryptedPassword = cryptojs
    .SHA256(password)
    .toString(cryptojs.enc.Base64);

  console.log(`update boprita_credit.StaffAccount_0
  SET password = '${encryptedPassword}' where email_address = ${email}`);
  const update = await handleQuery(`update boprita_credit.StaffAccount_0
  SET password = '${encryptedPassword}' where email_address = '${email}'`);
  res.send(update);
});
export const checkEmailAddress = catchErrors(async (req, res) => {
  console.log(req.params.email);
  const emailRecords = await handleQuery(
    `select * from boprita_credit.StaffAccount_0 where StaffAccount_0.email_address='${req.params.email}'`
  );

  console.log(emailRecords);
  if (emailRecords.length > 0) {
    res.send({ exists: true });
  } else {
    res.send({ exists: false });
  }
});

export const changeProfile = catchErrors(async (req, res) => {
  const { password, imageUrl, dept } = req.body;
  const encryptedPassword = cryptojs
    .SHA256(password)
    .toString(cryptojs.enc.Base64);

  //const imgLink = await uploadPhoto(imageUrl);
  const type = (imageUrl.toString("base64")).split(';')[0].split('/')[1];
  const imgLink = await aws_upload({file: imageUrl , filename: `profile.${type}`})
  const { ID } = req.user;

  const update = await handleQuery(`update boprita_credit.StaffAccount_0
  SET  StaffAccount_0.password = '${encryptedPassword}' , StaffAccount_0.helpdesk_profile='${imgLink.url}' , StaffAccount_0.departmentId =${dept}
  where StaffAccount_0.ID = ${ID}`);

  res.send({ img: imgLink.url });
});

export const authenticate = catchErrors(async (req, res) => {
  const { password, username } = req.body;
  const encryptedPassword = cryptojs
    .SHA256(password)
    .toString(cryptojs.enc.Base64);

  const auth = await handleAuthentication(username, encryptedPassword);

  if (auth.length >= 1) {
    //console.log(auth)
    const user = auth[0];
    //console.log(user);
    const authToken = signToken(user);
    delete user.password;
    req.user = user;
    res.status(200).send({ user, authToken });
  } else {
    res.status(500).send("The password or email you've entered is not correct");
  }
});

export const getUsers = catchErrors(async (req,res) => {

  const users = await handleQuery(`SELECT StaffAccount_0.ID ,first_name , last_name ,email_address , helpdesk_profile ,departmentId ,d.department, d.sub_department FROM boprita_credit.StaffAccount_0
  join helpdesk.departments as d on departmentId = d.id ${filterUsers(req.params.type ,req.user)}`)
  console.log(req.user)
  console.log(req.params)
  res.send(users)
})

function filterUsers(type , user){
  if(!type) return ""
    if(user.system_role== 'supervisor'){
      return ` where d.sub_department='${user.sub_department}'`
    }
    if(user.system_role== 'developer'){
      return ` where d.department='${user.dept}'`
    }
    if(user.system_role== 'Head Of Department')
    {
      return ` where d.department='${user.dept}'`
    }
 return ''
}