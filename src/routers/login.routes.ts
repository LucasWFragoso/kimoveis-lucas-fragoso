import { Router } from "express";
import { loginUserController } from "../controllers/login.controllers";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import { userDataLogin } from "../schemas/login.schemas";

const loginRoute: Router = Router()

loginRoute.post('', ensureDataIsValidMiddleware(userDataLogin), loginUserController)

export {
    loginRoute
}