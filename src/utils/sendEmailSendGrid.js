import emailNote from "./emailNote.js";
import sgMail from "@sendgrid/mail";

export default function sendEmail(mail) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  return new Promise((resolve, reject) => {
    const msg = {
      to: `${mail.emaile_address}`, // Change to your recipient
      from: "helpdesk@thitoholdings.co.bw", // Change to your verified sender
      subject: "THITO HELPDESK NOTIFICATION",
      html: emailNote(mail.note, mail.issue),
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
