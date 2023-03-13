import { Request, Response } from "express";
import { IRealEstateData } from "../interfaces/reaEstate.interface";
import { createRealEstateService, ListRealEstateByCategoryService, listRealEstateService } from "../services/realEstate";

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const isAdmin: boolean = req.user.isAdmin
    const dataBody: IRealEstateData = req.body

    const newRealEstate = await createRealEstateService(isAdmin, dataBody)

    return res.status(201).json(newRealEstate)
}

export const ListRealEstateByCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const idCategory: number = parseInt(req.params.id)

    const listRealEstateByCategory = await ListRealEstateByCategoryService(idCategory)
    

    return res.status(200).json(listRealEstateByCategory)
}

export const listRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const listRealEstate = await listRealEstateService()

    return res.status(200).json(listRealEstate)
}