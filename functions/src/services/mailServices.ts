import * as nodemailer from "nodemailer"
// import * as smtpTransport from 'nodemailer-smtp-transport';




let transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: 'kemmanuel662@gmail.com',
        pass: 'abolyexgbhctvrtn'
    }
});

export const transporter = nodemailer.createTransport(transport);

// safe keep
// abolyexgbhctvrtn


