import nodemailer from "nodemailer";

export function sendEmail(email: string, name: string){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth:{
            user: "emailfortest767@gmail.com",
            pass: process.env.PASS 
        } 
    });

    const mailOptions = {
        from: '"PokesApp" <emailfortest767@gmail.com>',
        to: email, 
        subject: "Welcome to PokesApp",
        html: `
            <h3>Hello ${name}!</h3>
            <p>You already create you account and can use the app</p>
        `
    };

    transporter.sendMail(mailOptions, function (err){
        if (err) {
            console.log(err)
        }else {
            console.log("Email sent successfully")
        }
    })
}