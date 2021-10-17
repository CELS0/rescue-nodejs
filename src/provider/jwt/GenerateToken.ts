import { sign } from "jsonwebtoken";

class GenerateToken {
    async execute(id: string) {
        const token = sign({}, "1ac74795-c57d-4152-8101-7e9490cd42a6", {
            subject: id,
            expiresIn: "20s"
        });
        return token;
    }
}

export { GenerateToken }