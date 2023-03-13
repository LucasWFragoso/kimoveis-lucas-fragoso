import { Router } from "express";
import { createRealEstateController, listRealEstateController } from "../controllers/realEstate.controllers";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middleware/ensureTokenIsValid.middleware";
import { realEstateDataSchema } from "../schemas/realEstate.schemas";

const realEstateRoutes: Router = Router()

realEstateRoutes.post('',  ensureDataIsValidMiddleware(realEstateDataSchema), ensureTokenIsValidMiddleware, createRealEstateController)
realEstateRoutes.get('', listRealEstateController)

export {
    realEstateRoutes
}