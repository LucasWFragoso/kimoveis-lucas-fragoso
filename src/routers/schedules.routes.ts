import { Router } from 'express';
import { createScheduleController, listSchedulesByRealEstateController } from '../controllers/schedules.controllers';
import ensureDataIsValidMiddleware from '../middleware/ensureDataIsValid.middleware';
import ensureTokenIsValidMiddleware from '../middleware/ensureTokenIsValid.middleware';
import { scheduleDataSchema } from '../schemas/schedules.schema';

const schedulesRoutes: Router = Router()

schedulesRoutes.post('', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(scheduleDataSchema), createScheduleController)
schedulesRoutes.get('/realEstate/:id', ensureTokenIsValidMiddleware, listSchedulesByRealEstateController)

export {
    schedulesRoutes
}