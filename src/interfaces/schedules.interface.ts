import { z } from 'zod';
import { listSchedulesByRealEstateSchema, scheduleDataSchema } from '../schemas/schedules.schema';

type IScheduleData = z.infer<typeof scheduleDataSchema>
type IlistScheduleByRealEstate = z.infer<typeof listSchedulesByRealEstateSchema>

export {
    IScheduleData,
    IlistScheduleByRealEstate
}