import { Request, Response } from "express";
import { AppError } from "../errors";
import { IListUser, IUser, IUserData } from "../interfaces/users.interfaces";
import { createUserService, listUsersService } from "../services/users";

export const createUserController = async (req: Request, res: Response): Promise< Response > => {
    const userData: IUserData = req.body

    const user: IUser = await createUserService(userData)

    return res.status(201).json(user)
}

export const listUsersController = async (req: Request, res: Response): Promise< Response > => {
    const isAdmin: boolean = req.user.isAdmin

    if(!isAdmin){
        throw new AppError('User not admin', 403)
    }

    const listUser: IListUser = await listUsersService()

    return res.status(200).json(listUser)
}