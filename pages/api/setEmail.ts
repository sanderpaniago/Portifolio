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
       host: 'smtp.office365.com',
       port: 587,
       secure: false,
       auth: {
           user: 'enviacontatofmcr@outlook.com',
           pass: '@159753sSa',
       }
   })

   transporter.sendMail({
       from: `"${nome}" <enviacontatofmcr@outlook.com>`, // sender address
       to: 'enviacontatofmcr@gmail.com', // list of receivers
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