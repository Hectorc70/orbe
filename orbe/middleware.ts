// middleware.ts - Versión corregida
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') ||
    pathname === '/sw.js' ||
    pathname.startsWith('/workbox-') ||
    pathname === '/manifest.json'
  ) {
    return NextResponse.next();
  }

  console.log('🔄 Middleware ejecutándose para:', pathname);

  // ✅ CORRECCIÓN: Obtener token de cookies (no localStorage)
  const token = request.cookies.get('auth-token')?.value;
  const userId = request.cookies.get('user-id')?.value;

  console.log('🍪 Token en cookie:', token ? 'Presente' : 'Ausente');
  console.log('🆔 User ID en cookie:', userId ? 'Presente' : 'Ausente');

  // Verificar autenticación
  const isAuthenticated = await isValidToken(token, userId);

  // Rutas protegidas
  const protectedRoutes = ['/dashboard', '/backend'];
  const guestOnlyRoutes = ['/register', '/login'];

  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isGuestOnlyRoute = guestOnlyRoutes.some(route => pathname.startsWith(route));

  console.log('📍 Ruta:', pathname);
  console.log('🔒 Protegida:', isProtectedRoute);
  console.log('👤 Autenticado:', isAuthenticated);

  // Lógica de redirección
  if (isAuthenticated && isGuestOnlyRoute) {
    console.log('✅ Usuario autenticado redirigido a dashboard');
    const response = NextResponse.redirect(new URL('/dashboard', request.url));
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    return response;
  }

  if (!isAuthenticated && isProtectedRoute) {
    console.log('❌ Usuario no autenticado redirigido a register');
    const response = NextResponse.redirect(new URL('/register', request.url));
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    return response;
  }

  console.log('✅ Acceso permitido');
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).+)'],
};

async function isValidToken(token?: string, userId?: string): Promise<boolean> {
  if (!token || !userId) {
    console.log('❌ Token o userId ausente');
    return false;
  }

  try {
    // Opción 1: Validación local del JWT
    if (token.split('.').length === 3) {
      const payload = JSON.parse(atob(token.split('.')[1]));

      // Verificar expiración
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        console.log('❌ Token expirado');
        return false;
      }

      // Verificar que el userId coincida
      if (payload.sub !== userId && payload.userId !== userId && payload.id !== userId) {
        console.log('❌ UserId no coincide');
        return false;
      }

      console.log('✅ Token válido');
      return true;
    }

    console.log('❌ Token con formato inválido');
    return false;
  } catch (error) {
    console.error('❌ Error validando token:', error);
    return false;
  }
}



