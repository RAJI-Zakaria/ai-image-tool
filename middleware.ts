import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks/clerk(.*)",
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: "/",
};

// export const config = {
//   matcher: [
//     '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
//     '/', // Run middleware on index page
//     '/(api|trpc)(.*)'], // Run middleware on API routes
// };
