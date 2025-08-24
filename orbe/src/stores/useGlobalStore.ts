import { IUser } from "@/models/userModel"
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface GlobalState {
  // Estado
  user: IUser | null
  isAuthenticated: boolean

  // Acciones
  setUser: (user: IUser | null) => void
  updateUser: (updates: Partial<IUser>) => void
  logout: () => void

  // Computed values
  getUserName: () => string
  isLoggedIn: () => boolean
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set, get) => ({
      // Estado inicial
      user: null,
      isAuthenticated: false,

      // Acciones
      setUser: (user) => set({
        user,
        isAuthenticated: !!user
      }),

      updateUser: (updates) => set((state) => ({
        user: state.user ? { ...state.user, ...updates } : null
      })),

      logout: () => set({
        user: null,
        isAuthenticated: false
      }),

      // Computed values
      getUserName: () => {
        const { user } = get()
        return user?.username || user?.email || 'Guest'
      },

      isLoggedIn: () => {
        const { user } = get()
        return !!user
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
      // Solo persistir el user
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      }),
    }
  )
)