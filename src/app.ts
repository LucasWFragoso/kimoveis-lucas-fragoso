import 'express-async-errors';
import { errorHandler } from './errors';
import express, { Application } from 'express';
import {usersRoutes} from './routers/users.routes';
import { loginRoute } from './routers/login.routes';
import { categoriesRoutes } from './routers/categories.routes';
import { realEstateRoutes } from './routers/realEstate.routes';
import { schedulesRoutes } from './routers/schedules.routes';

const app: Application = express();

app.use(express.json())

app.use('/users', usersRoutes)
app.use('/login', loginRoute)
app.use('/categories', categoriesRoutes)
app.use('/realEstate', realEstateRoutes)
app.use('/schedules', schedulesRoutes)

app.use(errorHandler)

export default app