interface IAddress {
    email: string;
    name: string;
}

export interface IMessage {
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
}

export interface INodemailerProvider {
    sendMail(message: IMessage): Promise<void>;
}