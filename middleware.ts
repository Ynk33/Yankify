import { NextRequest, NextResponse } from 'next/server'
import { WordpressAPI } from 'ydl-react-components';

export const config = {
  matcher: '/',
}

export async function middleware(req: NextRequest) {
  // Check Edge Config to see if the maintenance page should be shown
  const isInMaintenanceMode = await WordpressAPI.isInMaintenanceMode();

  // If in maintenance mode, point the url pathname to the maintenance page
  if (isInMaintenanceMode) {
    req.nextUrl.pathname = `/maintenance`

    // Rewrite to the url
    return NextResponse.rewrite(req.nextUrl)
  }
}