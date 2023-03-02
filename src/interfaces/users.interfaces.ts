import { z } from 'zod';
import { userDataRequest, userSchema } from '../schemas/users.schema';

type IUser = z.infer<typeof userSchema>
type IUserData = z.infer<typeof userDataRequest>

export {
    IUser,
    IUserData
}