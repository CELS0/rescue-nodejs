import { ISpekeasyProvaider } from "../ISpekeasyProvider";
import speakeasy, { GeneratedSecret } from 'speakeasy';


class SpekeasyProvaider implements ISpekeasyProvaider {
    async generate(): Promise<GeneratedSecret> {
        const secret = speakeasy.generateSecret();
        return secret;
    }
    async verify(secret: string, token: string): Promise<boolean> {
        const verified =  speakeasy.totp.verify({
            secret,
            encoding: 'base32',
            token
        })

        return verified;
    }
    async  validaded(secret: string, token: string): Promise<boolean> {
        const validaded =  speakeasy.totp.verify({
            secret,
            encoding: 'base32',
            token,
            window: 1,
        })

        return validaded;
    }
}

export { SpekeasyProvaider }