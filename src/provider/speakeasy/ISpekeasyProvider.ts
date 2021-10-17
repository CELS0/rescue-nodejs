import { GeneratedSecret } from "speakeasy";

export interface ISpekeasyProvaider {
    generate(): Promise<GeneratedSecret>;
    verify(secret: string, token: string): Promise<boolean>;
    validaded(secret: string, token: string): Promise<boolean>;
}