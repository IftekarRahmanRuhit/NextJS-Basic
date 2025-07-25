import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyData = {
        role: 'user', 
    }
    const isServicesPage = request.nextUrl.pathname.startsWith('/services')
    const isAdmin = dummyData.role == 'admin'

    if (isServicesPage && !isAdmin) {
        // Redirect to home page if user is not admin
        return NextResponse.redirect(new URL('/login', request.url))}
        
        return NextResponse.next()
 


}