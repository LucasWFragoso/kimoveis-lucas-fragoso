import { Request, Response } from "express";
import { ICategoriesData, ICategoriesReturn, IListCategories } from "../interfaces/categories.interfaces";
import { createCategoriesService, listCategoriesService } from "../services/categories";

export const createCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    const isAdmin: boolean = req.user.isAdmin
    const categoriesData: ICategoriesData = req.body

    const newCategory: ICategoriesReturn = await createCategoriesService(isAdmin, categoriesData)

    return res.status(201).json(newCategory)
}

export const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const listCategories: IListCategories = await listCategoriesService()

    return res.status(200).json(listCategories)
}
