const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    console.log("mail");
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        type: "login",
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(email, activationLink) {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Activate your account",
        text: "",
        html: `
          <div>
            <h1>Please activate your account</h1>
            <a href="${activationLink}">Click here to activate</a>
          </div>
        `,
      });
    } catch (e) {
      console.error(e);
    }
  }
}

const mailService = new MailService();
module.exports = mailService;
