import { Router } from 'express';
import { createScheduleController } from '../controllers/schedules.controllers';
import ensureDataIsValidMiddleware from '../middleware/ensureDataIsValid.middleware';
import ensureTokenIsValidMiddleware from '../middleware/ensureTokenIsValid.middleware';
import { scheduleDataSchema } from '../schemas/schedules.schema';

const schedulesRoutes: Router = Router()

schedulesRoutes.post('', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(scheduleDataSchema), createScheduleController)

export {
    schedulesRoutes
}