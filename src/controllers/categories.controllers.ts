import { Request, Response } from "express";
import { ICategoriesData, ICategoriesReturn } from "../interfaces/categories.interfaces";
import { createCategoriesService } from "../services/categories";

export const createCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    const isAdmin: boolean = req.user.isAdmin
    const categoriesData: ICategoriesData = req.body

    const newCategory: ICategoriesReturn = await createCategoriesService(isAdmin, categoriesData)

    return res.status(201).json(newCategory)
}
