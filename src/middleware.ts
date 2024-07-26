import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const customer = cookies().get("next-auth.session-token");
    const customerWay2 = cookies().get("sessionToken");
    const { pathname } = request.nextUrl;

    let response: NextResponse = NextResponse.next();

    // Client
    if (
        (pathname === "/login" || pathname === "/register") &&
        (customer || customerWay2)
    ) {
        response = NextResponse.redirect(new URL("/", request.url));
    }

    // admin

    return response;
}

// Middleware check at routes
export const config = {
    matcher: ["/admin/:path*", "/login", "/register"],
};
