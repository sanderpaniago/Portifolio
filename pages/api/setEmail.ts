import {NextApiRequest, NextApiResponse} from 'next'
import nodemailer from 'nodemailer'

export default (req:NextApiRequest, res:NextApiResponse) => {
    const { 
        nome,
        email,
        telefone,
        assunto,
        menssagem
    } = req.body

    console.log(req.body)

   let transporter =  nodemailer.createTransport({
       host: 'smtp.mail.yahoo.com',
       port: 587,
       secured: true,
       auth: {
           user: process.env.USUARIO_SMTP,
           pass: process.env.SENHA_SMTP,
       }
   })

   transporter.sendMail({
       from: `"${nome}" <contatoformaccr@yahoo.com>`, // sender address
       to: 'sanderpaniagoev@gmail.com', // list of receivers
       subject: `${assunto}`, // Subject line
       text: `${menssagem}`, // plain text body
       html:  `
           <h1>Sou seu assistente de mensagem</h1>
           <p>venho trazer um comunicado de <strong>${nome} ${email}</strong>, telefone para contato: <strong>${telefone}</strong>,</br>
           com a seguinte mensagem: </br>
           ${menssagem}</p>`, // html body
   }).then(() => {
     res.send(res.statusCode =200)
   }).catch(error => {
     console.log(error)  
     res.send(res.statusCode = 500)
   })
}