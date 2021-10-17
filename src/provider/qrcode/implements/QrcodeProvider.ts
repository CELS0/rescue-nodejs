import QRCode from 'qrcode';
import { IQrcodeProvider } from "../IQrcodeProvider";

class QrcodeProvider implements IQrcodeProvider {
    async generate(otpauth_url: string): Promise<string> {
        const qrcode = await QRCode.toDataURL(otpauth_url);
        return qrcode;
    }
}

export { QrcodeProvider }