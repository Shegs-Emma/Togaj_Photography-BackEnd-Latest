const nodemailer = require('nodemailer');

exports.postRequest = (req, res) => {
    console.log('Request Came');
    let contactDatails = req.body;

    try{
        sendMail(contactDatails, info => {
            // console.log(info.messageId);
            res.status(201).send(info);
        });
    } catch (err) {
        res.status(400).send(err)
    }
    
};

const sendMail = async (user, callback) => {
    // The htmlContact is what will be delivered to the mail
    let htmlContent = `
                <h1><strong>Contact Form</strong></h1>
                <p>Hi,</p>
                <p>${user.name} contacted with the following Details</p>
                <br/>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phoneNumber}</p>
                <p>Message: ${user.message}</p>`
    
    //The transporter shouldn't be changed, the auth.user and pass must be the same with the mail placed in from:
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'mightymilan04',
            pass: 'march041992'
        }, tls: {
            rejectUnauthorized: false
          }
    });

    let mailOptions = {
        from : "mightymilan04@gmail.com",
        to: "Togajphotography21@gmail.com",
        subject: `Hello Togajphotography i am ${user.name}!`,
        text: '',
        html: htmlContent

    };

    let info = await transporter.sendMail(mailOptions);

    callback(info);
}