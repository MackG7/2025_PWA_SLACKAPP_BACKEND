import nodemailer from 'nodemailer'
import ENVIRONMENT from './environment.config.js'


//La configuracion para nuestro mailer 

const transporter = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
                user: 'mackgustutn509@gmail.com',
                pass: ENVIRONMENT.GMAIL_PASSWORD
            }
    }
)

export default transporter











