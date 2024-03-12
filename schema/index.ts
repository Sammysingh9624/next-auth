import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({ message: 'Email is Required' }),
    password: z.string().min(1, { message: 'Password is Required' }),
});

export const RegisterSchema = z.object({
    name: z.string().min(1, { message: 'Name is Required' }),
    email: z.string().email({ message: 'Email is Required' }),
    password: z.string().min(1, { message: 'Password is Required' }),
});
