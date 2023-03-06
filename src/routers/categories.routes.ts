import { Router } from "express";
import { createCategoriesController } from "../controllers/categories.controllers";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middleware/ensureTokenIsValid.middleware";
import { categoriesDataSchema } from "../schemas/categories.schemas";

const categoriesRoutes: Router = Router()

categoriesRoutes.post('', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(categoriesDataSchema), createCategoriesController)

export {
    categoriesRoutes
}