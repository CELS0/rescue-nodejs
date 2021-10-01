import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            message: "Unauthorized"
        })
    }

    const [, token] = authToken.split(" ");

    try {
        verify(token, "1ac74795-c57d-4152-8101-7e9490cd42a6");

        return next();
    } catch (err) {
        response.status(401).json({
            message: "Token invalid"
        })
    }
}