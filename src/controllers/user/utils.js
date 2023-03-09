import sendEmail from "../../utils/sendEmail.js"


const otpTemplate = (otp)=>{
    return `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:5px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="www.thitoholdings.co.bw" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600"> <img align="cen
     ter" border="0" src="https://res.cloudinary.com/thito-holdings/image/upload/v1645168991/th_logo_g6ao1b.png" alt="Image" title="Image" style="line-height: inherit; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; border: none; height: auto; float: none; width: 26%; max-width: 150.8px; display: inline-block;" width="150.8"></a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>You are recieving this message because your forgot your password for <strong>Thito Online Applications</strong>. Use the following OTP to reset your password.</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
      <p style="font-size:0.9em;">Regards,<br />IT Department</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Gaborone Office Plot 5624</p>
        <p> Broadhurst Industrial, Leraja Road</p>
        <p>Gaborone</p>
      </div>
    </div>
  </div>`
}

export const sendResetPasswordEmail = async (email, otp) => {

const mail = {
    email_address: email,
    subject:'RESET PASSWORD OTP',
    note:otpTemplate(otp),
}


const emailSend = await sendEmail(mail)

console.log(emailSend)
return emailSend

}