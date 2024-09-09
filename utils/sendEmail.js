const nodemail = require("nodemailer");
const { senderEmail, emailPassword } = require("../config/keys");

const sendEmail = async({ emailTo, subject, code, content }) => {
    const transporter = nodemail.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: senderEmail,
            pass: emailPassword
        }
    });

    const message = {
        to: emailTo,
        subject,
        html: `
        <div>Use this below code to ${content}</div>
        <p><strong>Code: </strong> ${code} </p>
        `,
    };

    await transporter.sendMail(message);
}

module.exports = sendEmail;