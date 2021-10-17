
export interface IQrcodeProvider{
    generate(otpauth_url: string): Promise<string>;
}