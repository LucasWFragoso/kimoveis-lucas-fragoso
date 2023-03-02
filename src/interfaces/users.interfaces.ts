import { z } from 'zod';
import { listUsersSchema, userDataRequest, userSchema } from '../schemas/users.schema';

type IUser = z.infer<typeof userSchema>
type IUserData = z.infer<typeof userDataRequest>
type IListUser = z.infer<typeof listUsersSchema>

export {
    IUser,
    IUserData,
    IListUser
}