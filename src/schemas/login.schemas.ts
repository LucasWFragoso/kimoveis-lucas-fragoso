import { z } from 'zod';

const userDataLogin = z.object({
    email: z.string().email(),
    password: z.string()
})

export {
    userDataLogin
}