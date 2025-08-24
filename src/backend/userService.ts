/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { controllers, createAbortableRequest } from "./abort_controller";
import { CANCELLED_REQUEST, handleError } from "./errors.util";
import { IUser } from "@/models/userModel";
import { lsId, lsToken } from "@/common/constants";
const baseApi = 'https://hackaton.hectordeveloper.com'
const createUser = async (data: IUser): Promise<void> => {
  const key = `createUser`;
  const signal = createAbortableRequest(key);

  try {
    debugger
    await axios.post(`${baseApi}/users/create/`, {
      email: data.email,
      username: data.username,
      password: data.password,
    }, {
      signal,
    });
    return;
  } catch (e: any) {
    if (axios.isCancel(e) || e.name === "CanceledError" || e.name === "AbortError") {
      return Promise.reject(CANCELLED_REQUEST);
    }
    throw handleError(e);
  } finally {
    delete controllers[key];
  }
};
const login = async (email: string, password: string): Promise<string> => {
  try {

    const response = await axios.post(`${baseApi}/users/login/`,
      {
        email,
        password,
      }
    )
    const { token, id } = response.data.data;
    setCookie(lsToken, token, {
      maxAge: 60 * 60 * 24 * 7, // 7 días
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });

    setCookie(lsId, id.toString(), {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    return id.toString();
  } catch (e: any) {
    throw handleError(e)
  }
}

function setCookie(name: string, value: string, options: {
  maxAge?: number;
  path?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}) {
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

export function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

// Función para eliminar cookies
function deleteCookie(name: string, path = '/') {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
}

const getUser = async (): Promise<IUser> => {
  try {
    const id = getCookie(lsId) || '';
    const token = getCookie(lsToken)
    const response = await axios.get(`${baseApi}/users/get/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    )
    const dataResult = response.data.data
    const data = {
      id: dataResult.user._id,
      username: dataResult.user.username,
      email: dataResult.user.email,
      walletAddress: dataResult.user.walletAddress.address,
      balanceUSDC: dataResult.balance,
      balanceNative: dataResult.balanceNative
    }
    return data as IUser
  } catch (e: any) {
    throw handleError(e)
  }
}

const logout = async (): Promise<void> => {
  try {
    const token = getCookie('auth-token');
  } catch (error) {
    console.error('Error en logout:', error);
    throw error;
  } finally {
    deleteCookie('auth-token');
    deleteCookie('user-id');
  }
};



const sendUSDC = async (send_to: string, amount: number, typeSend: number): Promise<void> => {
  //TypeSend // 0 = external, 1 = internal
  const key = `sendUSDC-${send_to}-${amount}-${typeSend}`;
  const signal = createAbortableRequest(key);
  try {
    const token = getCookie(lsToken)
    await axios.post(`${baseApi}/transactions/send/`, {
      send_to,
      amount,
      typeSend
    },
      {
        signal,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    )

  } catch (e: any) {
    if (axios.isCancel(e) || e.name === "CanceledError" || e.name === "AbortError") {
      return Promise.reject(CANCELLED_REQUEST);
    }
    throw handleError(e);
  } finally {
    delete controllers[key];
  }
}

const swapNative = async (amount: number): Promise<void> => {
  //TypeSend // 0 = external, 1 = internal
  const key = `swapNative-${amount}`;
  const signal = createAbortableRequest(key);
  try {
    const token = getCookie(lsToken)
    await axios.post(`${baseApi}/transactions/swap/`, {
      amount,
    },
      {
        signal,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    )

  } catch (e: any) {
    if (axios.isCancel(e) || e.name === "CanceledError" || e.name === "AbortError") {
      return Promise.reject(CANCELLED_REQUEST);
    }
    throw handleError(e);
  } finally {
    delete controllers[key];
  }
}
const ApiService = {
  createUser,
  login,
  getUser,
  logout,
  sendUSDC,
  swapNative
}

export default ApiService
