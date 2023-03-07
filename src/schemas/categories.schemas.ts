import { z } from 'zod';

const categoriesDataSchema = z.object({
    name: z.string().max(45)
})

const categoriesReturnSchema = categoriesDataSchema.extend({
    id: z.number()
})

const categoriesList = z.array(categoriesReturnSchema)

export {
    categoriesDataSchema,
    categoriesReturnSchema,
    categoriesList
}