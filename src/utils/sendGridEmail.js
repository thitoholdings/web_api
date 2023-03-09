import nodemailer from "nodemailer";
import emailNote from "./emailNote.js";
import sgMail from "@sendgrid/mail";

export default function sendEmail(mail) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log("THIS IS THE API KEY =>", process.env.SENDGRID_API_KEY);
  return new Promise((resolve, reject) => {
    const msg = {
      to: `${mail.email_address}`,
      from: "helpdesk@thitoholdings.co.bw",
      subject: `IT HELPDESK NOTIFICATION`,
      html: emailNote(mail.note, mail.issue),
      // to: `${mail.emaile_address}`, // Change to your recipient
      // to: `kutlos@thitoholdings.co.bw`, // Change to your recipient
      // from: "helpdesk@thitoholdings.co.bw", // Change to your verified sender
      // subject: "THITO HELPDESK NOTIFICATION",
      // text: "Hello world",
      // html: emailNote(mail.note, mail.issue),
    };
    sgMail
      .send(msg)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject({ message: "sending failed  " + error.message });
      });
  });
}
