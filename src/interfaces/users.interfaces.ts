import { z } from 'zod';
import { listUsersSchema, patchUserSchema, user, userDataRequest, userSchemaReturn } from '../schemas/users.schema';

type IUser = z.infer<typeof user>
type IUserReturn = z.infer<typeof userSchemaReturn>
type IUserData = z.infer<typeof userDataRequest>
type IListUser = z.infer<typeof listUsersSchema>
type IPatchUser = z.infer<typeof patchUserSchema>

export {
    IUser,
    IUserReturn,
    IUserData,
    IListUser,
    IPatchUser
}