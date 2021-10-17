import { INodemailerProvider, IMessage } from "../INodemailerProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer"
export class NodemailerProvider implements INodemailerProvider {
    private transporter: Mail;
  
    constructor() {
      this.transporter = nodemailer.createTransport({
        host: process.env.AWS_SES_HOST,
        port: 587,
        auth: {
          user: process.env.AWS_SES_USER,
          pass: process.env.AWS_SES_PASS,
        }
      })
    }
  
    async sendMail(message: IMessage): Promise<void> {
      console.log(message.to.email)
      await this.transporter.sendMail({
        to: {
          name: message.to.name,
          address: message.to.email,
        },
        from: {
          name: message.from.name,
          address: message.from.email,
        },
        subject: message.subject,
        html: message.body,
      })
    }
  }