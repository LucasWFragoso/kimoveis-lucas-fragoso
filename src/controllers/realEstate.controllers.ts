import { Request, Response } from "express";
import { IRealEstateData } from "../interfaces/reaEstate.interface";
import { createRealEstateService } from "../services/realEstate";

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const isAdmin: boolean = req.user.isAdmin
    const dataBody: IRealEstateData = req.body

    const newRealEstate = await createRealEstateService(isAdmin, dataBody)

    return res.status(201).json(newRealEstate)
}