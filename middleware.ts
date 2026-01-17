import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value
    if (!token) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-current-path', request.nextUrl.pathname)
    const response = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })
    return response
}

export const config = {
    matcher: [
        "/auth/:path*"
    ],
}