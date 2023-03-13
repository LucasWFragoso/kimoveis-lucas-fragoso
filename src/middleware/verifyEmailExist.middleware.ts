import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const verifyEmailExistMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const email: string = req.body.email

    if(email  === undefined){
        next()
    }else{
        const findUser = await usersRepository.find({
            where: {
                email: email
            }
        })

        if(findUser.length > 0){
            throw new AppError('Email already exists', 409)
        }

        next()
    }
}

export default verifyEmailExistMiddleware