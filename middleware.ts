import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/(.*)', '/api/webhooks/clerk', '/api/webhooks/stripe']
});
 console.log('called midddleware')
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};