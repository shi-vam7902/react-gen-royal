const EMAIL = process.env.EMAIL || 'shivamshah.glsbca20@gmail.com'
const PASS = process.env.PASS || 'srrztstefxeqsrce'
const nodemailer = require('nodemailer')
const hdb = require('nodemailer-express-handlebars')
const sendMail = async(to)=>{


const transporter = nodemailer.createTransport({
    service:'gmail',
    port:587,
    secure:false,
    auth:{
        user:EMAIL,
        pass:PASS
    }
})
transporter.use('compile',hdb({
    viewEngine:'express-handlebars',
    viewPath:'./views/'
}))

const mailOptions={
    from:"shivamshah.glsbca20@gmail.com",
    to:to,
    subject:'Testing mailer Service',
    text:"Hey This is My Demo Mail Just For Checking",
    attachments:[
        { filename:'thankyou.jpg',path:'../thankyou.jpg'}
    ],
    template:'index',

};
transporter.sendMail(mailOptions,(err,data)=>{
    if (err) {
        console.log("Error Sending Mail ",err);
        
    }else{
        console.log("Mail Sent Succesfully");
    }
})
}
sendMail('patelkushal682@gmail.com')
module.exports = {}