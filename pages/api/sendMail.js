import nodeMailer from "nodemailer";
// import sendGridTransport from "nodemailer-sendgrid-transport";

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "moath222elmarmori@gmail.com",
    pass: "yafaeyzoqumtwzir",
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(500).json({ message: "please add all fields" });
    }
    try {
      const resolve = await transporter.sendMail({
        to: "moath222elmarmori@gmail.com",
        from: "moath222elmarmori@gmail.com",
        subject: `Sedning E-Mail from portfolio website, \n Name: ${name}, \n Email: ${email}`,
        html: `<h1>${name}</h1><h2>${email}</h2><p>${message}</p>`,
      });
      return res.status(200).json({
        message:
          "Thanks For Contacting Me, I Will Review Your Message And Contact You In The Nearest Time Possible",
      });
    } catch (e) {
      console.log("error from sending email");
      console.log(e);
      return res.status(500).json({ message: "Something Went Wrong" });
    }
  } else {
    return res.status(200).json({ message: "Moath" });
  }
}
