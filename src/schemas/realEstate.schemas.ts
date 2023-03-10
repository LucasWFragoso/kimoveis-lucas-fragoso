import { z } from 'zod';
import { addressDataSchema, addressReturnSchema } from './addresses.schemas';
import { categoriesDataSchema, categoriesReturnSchema } from './categories.schemas';

const realEstateDataSchema = z.object({
    value: z.string().or(z.number()),
    size: z.number().positive(),
    address: addressDataSchema,
    categoryId: z.number()
})

const realEstateReturnSchema =z.object({
    value: z.string().or(z.number()),
    size: z.number().positive(),
    address: z.object({
        id: z.number(),
        street: z.string(),
        zipCode: z.string(),
        number: z.string().optional().nullable(),
        city: z.string(),
        state: z.string()
    }),
    category: z.object({
        id: z.number(),
        name: z.string()
    }),
    id: z.number(),
    sold: z.boolean(),
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