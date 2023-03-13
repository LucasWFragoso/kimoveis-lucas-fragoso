import { z } from "zod";
import { userDataLogin } from "../schemas/login.schemas";

type ILoginData = z.infer<typeof userDataLogin>

export {
    ILoginData
}