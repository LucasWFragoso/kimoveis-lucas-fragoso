import { z } from 'zod';
import { scheduleDataSchema } from '../schemas/schedules.schema';

type IScheduleData = z.infer<typeof scheduleDataSchema>

export {
    IScheduleData
}