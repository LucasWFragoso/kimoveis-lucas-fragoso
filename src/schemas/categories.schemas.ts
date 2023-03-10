import { z } from 'zod';
import { realEstateDataSchema, realEstateListByCategory, realEstateListSchema, realEstateReturnSchema } from './realEstate.schemas';

const categoriesDataSchema = z.object({
    name: z.string().max(45)
})

const categoriesReturnSchema = categoriesDataSchema.extend({
    id: z.number()
})

const categoriesList = categoriesReturnSchema.array()

const categoriesRealStateList = z.object({
    categoriesReturnSchema,
    realEstate: realEstateListByCategory.array()
})

export {
    categoriesDataSchema,
    categoriesReturnSchema,
    categoriesList,
    categoriesRealStateList
}