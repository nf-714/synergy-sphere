import { NextResponse, type NextRequest } from "next/server";
import { getUser } from "./queries/user";
import { updateSession } from "./supabase/middleware";

const PUBLIC_ROUTES = [
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
];

const PRIVATE_ROUTES = ["/profile", "/settings", "/home"];

export async function middleware(request: NextRequest) {
  const user = await getUser();
  const pathname = request.nextUrl.pathname;

  // Redirect logged-in users from public auth routes
  if (
    user &&
    (pathname === "/sign-in" || pathname === "/sign-up" || pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Redirect non-logged-in users from private routes
  if (!user && PRIVATE_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Update and continue with session
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
