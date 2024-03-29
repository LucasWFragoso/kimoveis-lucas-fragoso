import * as express from 'express';

declare global {
    namespace Express {
        interface Request {
            user: {
                isAdmin: boolean,
                id: number
            }
        }
    }
}