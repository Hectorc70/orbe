(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__de110ef0._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// middleware.ts - Versión corregida
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    if (pathname.startsWith('/_next/') || pathname.startsWith('/api/') || pathname.includes('.') || pathname === '/sw.js' || pathname.startsWith('/workbox-') || pathname === '/manifest.json') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
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
    const protectedRoutes = [
        '/dashboard',
        '/backend'
    ];
    const guestOnlyRoutes = [
        '/register',
        '/login'
    ];
    const isProtectedRoute = protectedRoutes.some((route)=>pathname.startsWith(route));
    const isGuestOnlyRoute = guestOnlyRoutes.some((route)=>pathname.startsWith(route));
    console.log('📍 Ruta:', pathname);
    console.log('🔒 Protegida:', isProtectedRoute);
    console.log('👤 Autenticado:', isAuthenticated);
    // Lógica de redirección
    if (isAuthenticated && isGuestOnlyRoute) {
        console.log('✅ Usuario autenticado redirigido a dashboard');
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/dashboard', request.url));
        response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        return response;
    }
    if (!isAuthenticated && isProtectedRoute) {
        console.log('❌ Usuario no autenticado redirigido a register');
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/register', request.url));
        response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        return response;
    }
    console.log('✅ Acceso permitido');
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\..*).+)'
    ]
};
async function isValidToken(token, userId) {
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
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__de110ef0._.js.map