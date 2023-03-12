import { z } from 'zod';

const scheduleDataSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number()
})

export {
    scheduleDataSchema
}