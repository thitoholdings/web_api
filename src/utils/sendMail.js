import nodemailer from "nodemailer"
import emailNote from "./emailNote.js";


export default function sendMail(mail){

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
            subject: `${mail.subject}`,
            html: mail.note
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