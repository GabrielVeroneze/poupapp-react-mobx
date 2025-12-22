import { createContext } from 'react'
import { usuarioStore } from './usuarioStore'

interface StoreContextType {
    usuarioStore: typeof usuarioStore
}

export const StoreContext = createContext<StoreContextType | null>(null)
