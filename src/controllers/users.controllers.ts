import { Request, Response } from "express";
import { IUser, IUserData } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users";

export const createUserController = async (req: Request, res: Response): Promise< Response > => {
    const userData: IUserData = req.body

    const user: IUser = await createUserService(userData)

    return res.status(201).json(user)
}