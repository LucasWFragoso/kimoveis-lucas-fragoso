import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import verifyEmailExistMiddleware from "../middleware/verifyEmailExist.middleware";
import { userDataRequest } from "../schemas/users.schema";

const usersRoutes: Router = Router()

usersRoutes.post('', verifyEmailExistMiddleware, ensureDataIsValidMiddleware(userDataRequest), createUserController)


export {
    usersRoutes  
}