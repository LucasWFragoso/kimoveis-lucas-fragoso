import { z } from 'zod';

const userDataRequest = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean().default(false)
})

const userSchema = userDataRequest.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({password: true})

const listUsersSchema = z.array(userSchema)

export {
    userDataRequest,
    userSchema,
    listUsersSchema
}