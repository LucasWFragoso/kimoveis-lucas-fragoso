import { Request, Response } from "express";
import { IScheduleData } from "../interfaces/schedules.interface";
import { createScheduleService } from "../services/schedules";

export const createScheduleController = async (req: Request, res: Response): Promise< Response > => {
    const idUser: number = req.user.id;
    const isAdmin: boolean = req.user.isAdmin;
    const dataBody: IScheduleData = req.body

    const schedule = await createScheduleService(idUser, isAdmin, dataBody)

    return res.status(201).json({
        message: schedule
    })
}