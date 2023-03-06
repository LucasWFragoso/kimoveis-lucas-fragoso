import { z } from 'zod';

const userDataRequest = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean().default(false)
})

const user = userDataRequest.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
})

const userSchemaReturn = user.extend({
}).omit({password: true})

const listUsersSchema = z.array(userSchemaReturn)

const patchUserSchema = userDataRequest.partial().omit({admin: true})

export {
    user,
    userDataRequest,
    userSchemaReturn,
    listUsersSchema,
    patchUserSchema
}