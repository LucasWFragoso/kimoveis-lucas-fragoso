import { z } from "zod";

const addressDataSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(8).optional().nullable(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const addressReturnSchema = addressDataSchema.extend({
    id: z.number()
})

export {
    addressDataSchema,
    addressReturnSchema
}