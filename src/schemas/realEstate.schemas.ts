import { z } from 'zod';
import { addressDataSchema, addressReturnSchema } from './addresses.schemas';
import { categoriesReturnSchema } from './categories.schemas';

const realEstateDataSchema = z.object({
    value: z.string().or(z.number()),
    size: z.number(),
    address: addressDataSchema,
    categoryId: z.number()
})

const realEstateReturnSchema =z.object({
    id: z.number(),
    value: z.string().or(z.number()),
    size: z.number(),
    sold: z.boolean(),
    address: addressReturnSchema,
    category: categoriesReturnSchema,
    createdAt: z.string(),
    updatedAt: z.string()
})

const realEstateListByCategory = z.object({
    id: z.number(),
    value: z.string().or(z.number()),
    size: z.number(),
    sold: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string()
}) 

const realEstateListSchema = z.array(realEstateReturnSchema)

export { 
    realEstateDataSchema,
    realEstateReturnSchema,
    realEstateListSchema,
    realEstateListByCategory
}