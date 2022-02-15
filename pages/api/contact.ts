import type { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

require("dotenv").config();

type Data = {
  name: string;
  email: string;
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "budgets@davidgalera.dev",
      pass: process.env.GOOGLE_PASSWORD,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: string, success: string) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
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

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err: string, info: string) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).send({ name, email, message });
};
