import nodemailer from "nodemailer"
import emailNote from "./emailNote.js";


export default function sendEmail(mail){

  //  console.log("Password GMAIL "+ process.env.GMAIL_PASSWORD)
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'thitoithelpdesk@gmail.com',
            pass: process.env.GMAIL_PASSWORD
            }
        });
      const mail_options= {
            from: "thitoithelpdesk@gmail.com",
            to: `${mail.email_address}`,
            subject: "IT HELPDESK NOTIFICATION",
            html: emailNote(mail.note , mail.issue),
          }

      transporter.sendMail(mail_options, function(error, info){

            if (error) {
                return reject({message: 'sending failed: ' + error.message});
            } else {
                return resolve();
            }

      });

    });

}