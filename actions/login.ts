'use server';
import { LoginSchema, RegisterSchema } from '@/schema';
import * as z from 'zod';
export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
    const isValid = LoginSchema.safeParse(values);
    if (!isValid.success) return { error: 'Invalid Credentials' };
    return { success: 'Email sent!' };
};

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
    const isValid = RegisterSchema.safeParse(values);
    if (!isValid.success) return { error: 'Invalid Credentials' };
    return { success: 'Email sent!' };
};
