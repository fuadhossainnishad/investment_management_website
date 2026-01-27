// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/dashboard") && !token) {
        return NextResponse.redirect(new URL("/signIn", request.url));
    }

    // 2. Redirect authenticated users away from signIn/signUp to dashboard
    if ((pathname === "/signIn" || pathname === "/signUp") && token) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/signIn",
        "/signUp"
    ],
};