import { z } from 'zod';
import { addressReturnSchema } from './addresses.schemas';
import { categoriesReturnSchema } from './categories.schemas';
import { realEstateDataSchema } from './realEstate.schemas';
import { userSchemaReturn } from './users.schema'; 

const scheduleDataSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number()
})

const scheduleReturnSchema = scheduleDataSchema.extend({
    id: z.number(),
    user: userSchemaReturn
}).omit({realEstateId: true})

const listSchedulesByRealEstateSchema = z.object({
    RealEstate: realEstateDataSchema.omit({categoryId: true}),
    category: categoriesReturnSchema,
    Schedule: z.array(scheduleReturnSchema)
})

export {
    scheduleDataSchema,
    scheduleReturnSchema,
    listSchedulesByRealEstateSchema
}