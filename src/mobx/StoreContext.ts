import { createContext } from 'react'
import { usuarioStore } from './usuarioStore'
import { transacoesStore } from './transacoesStore'

interface StoreContextType {
    usuarioStore: typeof usuarioStore
    transacoesStore: typeof transacoesStore
}

export const StoreContext = createContext<StoreContextType | null>(null)
