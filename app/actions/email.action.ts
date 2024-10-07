"use server";
import { env } from "process";

const nodemailer = require("nodemailer");

export const sendMail = async (formData: FormData): Promise<void> => {
    const subject = formData.get("subject");
    const message = formData.get("message");
    const email = formData.get("email");
    const gdpr = formData.get("gdpr");

    const user = env.EMAIL_USERNAME;
    const pass = env.EMAIL_PASSWORD;
    const to = env.EMAIL_TO;
    const from = env.EMAIL_FROM;

    var transport = nodemailer.createTransport({
        host: "smtp.seznam.cz",
        port: 465,
        secure: true,
        auth: {
            user,
            pass,
        },
    });

    transport.sendMail({
        from,
        to,
        subject: "[productdesign.cz] " + subject,
        html: `<p>
                <b>Od:</b> ${email}<br>
                <b>Předmět:</b> ${subject}<br>
                <b>Souhlas GDPR:</b> ${gdpr ? "Ano" : "Ne"}<br>
                <b>Zpráva:</b><br>
                ${message}</p>`,
    });
};
