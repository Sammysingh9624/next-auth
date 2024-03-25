import authConfig from '@/auth.config';
import NextAuth from 'next-auth';
import { DEFAULT_ROUTES, apiAuthPrefix, authRoutes, publicRoute } from './route';
const { auth } = NextAuth(authConfig);
export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoute.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return null;
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_ROUTES, nextUrl));
        }

        return null;
    }
    if (!isPublicRoute && !isLoggedIn) {
        return Response.redirect(new URL('/auth/login', nextUrl));
    }
    return null;
});
// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
