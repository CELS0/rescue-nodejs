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
        verify(token, "faa0f76b-ed35-4760-987b-fd35f094cc31");

        return next();
    } catch (err) {
        response.status(401).json({
            message: "Token invalid"
        })
    }
}