import type { NextApiRequest, NextApiResponse } from "next";

require("dotenv").config();

type Data = {
  name: string;
  email: string;
  message: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name, email, message } = req.body;

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "budgets@davidgalera.dev",
      pass: process.env.GOOGLE_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: {
      name: "Solicitudes Presupuestos",
      address: "budgets@davidgalera.dev",
    },
    to: "contact@davidgalera.dev, dgalerarodriguez@gmail.com",
    subject: `Solicitud de ${name}`,
    text: message + " | Enviado por: " + email,
    html: `<div>${message}</div><p>Enviado por:
    ${email}</p>`,
  };

  transporter.sendMail(mailData, function (err: string, info: string) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).send({ name, email, message });
}
