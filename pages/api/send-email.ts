import { NextApiRequest, NextApiResponse } from "next";
import sgMail from '@sendgrid/mail'


export default async (req: NextApiRequest,res: NextApiResponse) => {
    console.log(req.body)
    const {nome, email,telefone, assunto, menssage: mensagem} = req.body

    sgMail.setApiKey(process.env.SENDRID_API_KEY)
    const mesageEmail = {
        to: 'sanderppaniago@gmail.com', // Change to your recipient
        from: 'sanderpaniagoev@gmail.com', // Change to your verified sender
        subject: assunto,
        text: mensagem,
        html: `<div>
                    <p>Olá sou o <strong>${nome}</strong>, venho por meio desse email falar sobre o assunto:</p>
                    <strong>${assunto}</strong>
                    <p>${mensagem}</p>
                    <p>Meu telefone para contato: ${telefone}</p>
                    <span>meu contato de email: ${email}</span>
                </div>
                `,
    }

    sgMail.send(mesageEmail).then(()=> res.status(200).send('Email enviado com sucesso')).catch((error)=> res.status(404).send('Erro ao enviar email'))

}