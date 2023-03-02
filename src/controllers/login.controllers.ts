import { Request, Response } from "express";
import { ILoginData } from "../interfaces/login.interfaces";
import { loginUserService } from "../services/login";

export const loginUserController = async ( req: Request, res: Response): Promise< Response > => {
    const loginData: ILoginData = req.body

    const token: string = await loginUserService(loginData)

    return res.status(200).json({
        token: token
    })
}
