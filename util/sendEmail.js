const nodemailer = require("nodemailer");
const handlebars = require("handlebars");

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      //   host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });

    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

const sendHtmlEmail = async (email, subject, html, text, context) => {
  try {
    const transporter = nodemailer.createTransport({
      //   host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    let template = handlebars.compile(html);
    let replacements = {
      link: context.link,
    };
    let htmlToSend = template(replacements);
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      html: htmlToSend,
      text: text,
    });

    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = { sendEmail, sendHtmlEmail };
