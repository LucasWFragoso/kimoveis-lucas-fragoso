import 'express-async-errors';
import { errorHandler } from './errors';
import express, { Application } from 'express';

const app: Application = express();

app.use(express.json())

app.use(errorHandler)

export default app