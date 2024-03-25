'use server';
import { signIn } from '@/auth';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import { DEFAULT_ROUTES } from '@/route';
import { LoginSchema, RegisterSchema } from '@/schema';
import bycrypt from 'bcryptjs';
import { AuthError } from 'next-auth';
import * as z from 'zod';
export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
    const isValid = LoginSchema.safeParse(values);
    if (!isValid.success) return { error: 'Invalid Credentials' };

    const { email, password } = isValid.data;
    try {
        await signIn('credentials', { email, password, redirectTo: DEFAULT_ROUTES });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin': {
                    return { error: 'Invalid Credentials' };
                }
                default:
                    return {
                        error: 'Something went wrong. Please try again.',
                    };
            }
        }
        throw error;
    }
};

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
    const validFields = RegisterSchema.safeParse(values);
    if (!validFields.success) return { error: 'Invalid Credentials' };
    const { name, email, password } = validFields.data;
    const hashedPassword = await bycrypt.hash(password, 12);
    const existUser = await getUserByEmail(email);
    if (existUser) {
        return { error: 'User already exist' };
    }
    const user = await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });
    //TODOS : send verification token
    return { success: 'User Created Successfully', user: { name: user.name, email: user.email } };
};
