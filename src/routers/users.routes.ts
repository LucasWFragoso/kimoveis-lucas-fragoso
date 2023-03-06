import { Router } from "express";
import { createUserController, listUsersController, patchUserController } from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middleware/ensureTokenIsValid.middleware";
import verifyEmailExistMiddleware from "../middleware/verifyEmailExist.middleware";
import { patchUserSchema, userDataRequest } from "../schemas/users.schema";

const usersRoutes: Router = Router()

usersRoutes.post('', verifyEmailExistMiddleware, ensureDataIsValidMiddleware(userDataRequest), createUserController)
usersRoutes.get('', ensureTokenIsValidMiddleware, listUsersController)
usersRoutes.patch('/:id', ensureTokenIsValidMiddleware, verifyEmailExistMiddleware, ensureDataIsValidMiddleware(patchUserSchema), patchUserController)

export {
    usersRoutes  
}