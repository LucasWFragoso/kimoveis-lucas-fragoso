import { Request,Response, NextFunction } from "express";
import { AppError } from '../errors';
import jwt from 'jsonwebtoken';

const ensureTokenIsValidMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let token = req.headers.authorization

    if(!token){
        throw new AppError('Missing bearer token', 401)
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {

        if(error){
            throw new AppError(error.message, 401)
        }

        req.user = {
            isAdmin: decoded.admin,
            id: Number(decoded.sub)
        }

        next()
    })
}

export default ensureTokenIsValidMiddleware