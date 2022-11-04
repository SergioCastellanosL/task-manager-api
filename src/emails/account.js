const API_KEY = process.env.API_KEY
const DOMAIN = process.env.DOMAIN
process.env.API_KEY

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});

const sendWelcomeEmail = (email, name) =>{
    const messageData = {
        from: 'Excited User <serancaslan@gmail.com>',
        to: email,
        subject: 'Thanks for joining in',
        text: `Welcome to the app ${name}`
      };
    client.messages.create(DOMAIN, messageData)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
}

const sendCancelationEmail = (email, name) =>{
    const messageData = {
        from: 'Excited User <serancaslan@gmail.com>',
        to: email,
        subject: 'Cancelation account',
        text: `Hi ${name}, can you tell us the reason for cancel your account. Thanks`
      };
    client.messages.create(DOMAIN, messageData)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}