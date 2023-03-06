import { Request, Response } from "express";
import { IListUser, IPatchUser, IUserReturn, IUserData } from "../interfaces/users.interfaces";
import { createUserService, listUsersService, patchUserService } from "../services/users";

export const createUserController = async (req: Request, res: Response): Promise< Response > => {
    const userData: IUserData = req.body

    const user: IUserReturn = await createUserService(userData)

    return res.status(201).json(user)
}

export const listUsersController = async (req: Request, res: Response): Promise< Response > => {
    const isAdmin: boolean = req.user.isAdmin

    const listUser: IListUser = await listUsersService(isAdmin)

    return res.status(200).json(listUser)
}

export const patchUserController = async (req: Request, res: Response): Promise< Response > => {
    const idUser: number = req.user.id
    const idPatch: number = parseInt(req.params.id)
    const isAdmin: boolean = req.user.isAdmin
    const dataPatch: IPatchUser = req.body

    const patchUser = await patchUserService(idUser, isAdmin, dataPatch, idPatch)
    

    return res.status(200).json(patchUser)
}