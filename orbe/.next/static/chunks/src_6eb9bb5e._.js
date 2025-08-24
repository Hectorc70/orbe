(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/backend/abort_controller.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Controladores por clave
__turbopack_context__.s({
    "controllers": (()=>controllers),
    "createAbortableRequest": (()=>createAbortableRequest)
});
const controllers = {};
// Helper para crear/abortar peticiones previas
const createAbortableRequest = (key)=>{
    if (controllers[key]) {
        controllers[key].abort();
    }
    const controller = new AbortController();
    controllers[key] = controller;
    return controller.signal;
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/backend/errors.util.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "CANCELLED_REQUEST": (()=>CANCELLED_REQUEST),
    "handleError": (()=>handleError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
;
const CANCELLED_REQUEST = Symbol('Request was cancelled');
const handleError = (e)=>{
    if (e === undefined) {
        return 'Error desconocido';
    }
    if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
        const responseData = e.response?.data;
        if (typeof responseData === 'string') {
            return responseData.toString();
        }
        if (responseData?.data?.error_details) {
            return responseData.data.error_details;
        }
        if (responseData?.message) {
            return responseData.message;
        }
        if (responseData?.statusText) {
            return responseData.statusText;
        }
        return e.message || 'Error desconocido de Axios';
    }
    if (e instanceof Error) {
        return e.message;
    }
    return 'Sucedió algo inesperado: ' + JSON.stringify(e);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/common/constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "lsId": (()=>lsId),
    "lsToken": (()=>lsToken)
});
const lsToken = 'auth_token';
const lsId = 'auth_id';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/backend/userService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "getCookie": (()=>getCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$abort_controller$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/abort_controller.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/errors.util.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/constants.ts [app-client] (ecmascript)");
;
;
;
;
const baseApi = 'https://hackaton.hectordeveloper.com';
const createUser = async (data)=>{
    const key = `createUser`;
    const signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$abort_controller$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAbortableRequest"])(key);
    try {
        debugger;
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${baseApi}/users/create/`, {
            email: data.email,
            username: data.username,
            password: data.password
        }, {
            signal
        });
        return;
    } catch (e) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isCancel(e) || e.name === "CanceledError" || e.name === "AbortError") {
            return Promise.reject(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANCELLED_REQUEST"]);
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(e);
    } finally{
        delete __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$abort_controller$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["controllers"][key];
    }
};
const login = async (email, password)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${baseApi}/users/login/`, {
            email,
            password
        });
        const { token, id } = response.data.data;
        setCookie(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lsToken"], token, {
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            sameSite: 'lax'
        });
        setCookie(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lsId"], id.toString(), {
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            sameSite: 'lax'
        });
        return id.toString();
    } catch (e) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(e);
    }
};
function setCookie(name, value, options) {
    let cookieString = `${name}=${value}`;
    if (options.maxAge) {
        cookieString += `; max-age=${options.maxAge}`;
    }
    if (options.path) {
        cookieString += `; path=${options.path}`;
    }
    if (options.secure) {
        cookieString += `; secure`;
    }
    if (options.sameSite) {
        cookieString += `; samesite=${options.sameSite}`;
    }
    document.cookie = cookieString;
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
}
// Función para eliminar cookies
function deleteCookie(name, path = '/') {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
}
const getUser = async ()=>{
    try {
        const id = getCookie(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lsId"]) || '';
        const token = getCookie(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lsToken"]);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${baseApi}/users/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const dataResult = response.data.data;
        const data = {
            id: dataResult.user._id,
            username: dataResult.user.username,
            email: dataResult.user.email,
            walletAddress: dataResult.user.walletAddress.address,
            balanceUSDC: dataResult.balance,
            balanceNative: dataResult.balanceNative
        };
        return data;
    } catch (e) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(e);
    }
};
const logout = async ()=>{
    try {
        const token = getCookie('auth-token');
    } catch (error) {
        console.error('Error en logout:', error);
        throw error;
    } finally{
        deleteCookie('auth-token');
        deleteCookie('user-id');
    }
};
const sendUSDC = async (send_to, amount, typeSend)=>{
    //TypeSend // 0 = external, 1 = internal
    const key = `sendUSDC-${send_to}-${amount}-${typeSend}`;
    const signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$abort_controller$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAbortableRequest"])(key);
    try {
        const token = getCookie(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lsToken"]);
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${baseApi}/transactions/send/`, {
            send_to,
            amount,
            typeSend
        }, {
            signal,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (e) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isCancel(e) || e.name === "CanceledError" || e.name === "AbortError") {
            return Promise.reject(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANCELLED_REQUEST"]);
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(e);
    } finally{
        delete __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$abort_controller$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["controllers"][key];
    }
};
const swapNative = async (amount)=>{
    //TypeSend // 0 = external, 1 = internal
    const key = `swapNative-${amount}`;
    const signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$abort_controller$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAbortableRequest"])(key);
    try {
        const token = getCookie(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lsToken"]);
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${baseApi}/transactions/swap/`, {
            amount
        }, {
            signal,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (e) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isCancel(e) || e.name === "CanceledError" || e.name === "AbortError") {
            return Promise.reject(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANCELLED_REQUEST"]);
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(e);
    } finally{
        delete __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$abort_controller$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["controllers"][key];
    }
};
const ApiService = {
    createUser,
    login,
    getUser,
    logout,
    sendUSDC,
    swapNative
};
const __TURBOPACK__default__export__ = ApiService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/inputForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
/**
 * Componente `FormInput`
 *
 * Permite crear campos de texto integrados con `react-hook-form`, incluye validaciones,
 * estilos condicionales, texto de ayuda y soporte para íconos interactivos embebidos.
 *
 * @param {string} label - Etiqueta visible encima del campo.
 * @param {string} name - Nombre del campo (clave para React Hook Form).
 * @param {string} [type="text"] - Tipo de input (texto, email, password, etc).
 * @param {string} [placeholder] - Texto de ayuda dentro del input.
 * @param {UseFormRegisterReturn<any>} register - Objeto de registro de React Hook Form.
 * @param {FieldError} [error] - Objeto de error si existe una validación fallida.
 * @param {string} [className] - Clases CSS adicionales para el contenedor del input.
 * @param {number} [maxLength=60] - Longitud máxima permitida.
 * @param {number} [minLength] - Longitud mínima requerida.
 * @param {boolean} [disabled=false] - Si está deshabilitado.
 * @param {string | number | readonly string[]} [defaultValue] - Valor por defecto del input.
 * @param {string} [helperText] - Texto de ayuda si no hay errores.
 * @param {React.ReactNode} [button] - Elemento visual embebido (ej. ícono o botón).
 * @param {() => void} [functionButton] - Función que se ejecuta al hacer clic en el botón.
 */ const FormInput = ({ label, name, type = 'text', placeholder = '', register, error, className = '', maxLength = 60, minLength, disabled = false, defaultValue, helperText, button, functionButton, value, onChange, step })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mb-4 flex ${type === 'checkbox' ? 'items-center justify-end  gap-2  flex-row-reverse' : 'flex-col'} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "text-colorText",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/inputForm.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        step: step,
                        id: name,
                        type: type,
                        placeholder: placeholder,
                        ...register ?? {
                            value,
                            onChange
                        },
                        className: `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
                        maxLength: maxLength,
                        minLength: minLength,
                        disabled: disabled,
                        defaultValue: defaultValue
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/inputForm.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    button && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: functionButton,
                        className: "cursor-pointer absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 hover:text-primary",
                        children: button
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/inputForm.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/inputForm.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500 text-sm",
                children: error.message
            }, void 0, false, {
                fileName: "[project]/src/components/ui/inputForm.tsx",
                lineNumber: 94,
                columnNumber: 17
            }, this),
            !error && helperText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-colorText text-xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/src/components/ui/inputForm.tsx",
                lineNumber: 95,
                columnNumber: 32
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/inputForm.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
};
_c = FormInput;
const __TURBOPACK__default__export__ = FormInput;
var _c;
__turbopack_context__.k.register(_c, "FormInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/send/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SwapPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useGlobalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/userService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/errors.util.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextjs$2d$toast$2d$notify$2f$dist$2f$nextjs$2d$toast$2d$notify$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextjs-toast-notify/dist/nextjs-toast-notify.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/inputForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function SwapPage() {
    _s();
    const { register, handleSubmit, watch, reset, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalStore"])();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [totalDeducted, setTotalDeducted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const updateUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalStore"])({
        "SwapPage.useGlobalStore[updateUser]": (state)=>state.updateUser
    }["SwapPage.useGlobalStore[updateUser]"]);
    const amountWatch = watch('amount');
    const [disabled, setDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const validateButton = ()=>{
        if (isNaN(amountWatch)) {
            setDisabled(true);
        } else {
            const amountbalance = user && user.balanceNative && parseFloat(user?.balanceNative.toString()) || 0;
            if (totalDeducted > amountbalance) {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
        }
    };
    const init = async ()=>{
        try {
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lsToken"]) || '';
            if (token === '' && !isAuthenticated) {
                router.push('/');
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getUser();
            updateUser(response);
            validateButton();
        } catch (error) {
            if (error != __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANCELLED_REQUEST"]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextjs$2d$toast$2d$notify$2f$dist$2f$nextjs$2d$toast$2d$notify$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"].error(error?.toString?.() ?? 'Error desconocido');
            }
        }
        return null;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SwapPage.useEffect": ()=>{
            init();
        }
    }["SwapPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SwapPage.useEffect": ()=>{
            if (amountWatch) {
                const parsedAmount = parseFloat(amountWatch.toString());
                setAmount(parsedAmount.toFixed(2));
                setTotalDeducted(parsedAmount);
                validateButton();
            }
        }
    }["SwapPage.useEffect"], [
        amountWatch
    ]);
    const onSubmit = async (data)=>{
        try {
            const amount = data.amount;
            if (isNaN(amount)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextjs$2d$toast$2d$notify$2f$dist$2f$nextjs$2d$toast$2d$notify$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"].error('Please enter an amount');
                return;
            }
            setIsSending(true);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].swapNative(totalDeducted);
            setIsSending(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextjs$2d$toast$2d$notify$2f$dist$2f$nextjs$2d$toast$2d$notify$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"].success('Funds changed successfully', {
                position: 'top-center'
            });
            reset();
            await init();
        } catch (error) {
            if (error != __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$errors$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANCELLED_REQUEST"]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextjs$2d$toast$2d$notify$2f$dist$2f$nextjs$2d$toast$2d$notify$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"].error(error?.toString?.() ?? 'Error desconocido', {
                    duration: 10000,
                    position: 'top-center'
                });
                setIsSending(false);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-start pt-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "space-y-6",
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Swap Funds"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/send/page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                className: "w-full max-w-lg",
                                children: "Convert your Monad tokens to USDC."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/send/page.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/send/page.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        step: "0.01",
                                        label: "Amount (USDC)",
                                        type: "number",
                                        placeholder: "0.00",
                                        name: "amount",
                                        register: register('amount', {
                                            required: 'Amount is required'
                                        }),
                                        error: errors.amount
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/send/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground pt-1",
                                        children: [
                                            "Available balance: $",
                                            user && user.balanceNative && user.balanceNative.toLocaleString(),
                                            " MON"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/send/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/send/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            amountWatch > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 rounded-lg border bg-secondary/50 p-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Amount to convert"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/send/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "$",
                                                    amountWatch
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/send/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/send/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/send/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Total to be deducted "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/send/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    " $",
                                                    totalDeducted,
                                                    " MON"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/send/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/send/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/send/page.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/send/page.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                        className: "pt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            className: "w-full",
                            disabled: !isSending && disabled,
                            isLoading: isSending,
                            children: [
                                "Swap to USDC",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "ml-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/send/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/send/page.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/send/page.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/send/page.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/send/page.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/send/page.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(SwapPage, "wyLCBkS4C4sSytXVs91HhWu4Fvc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalStore"]
    ];
});
_c = SwapPage;
var _c;
__turbopack_context__.k.register(_c, "SwapPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_6eb9bb5e._.js.map