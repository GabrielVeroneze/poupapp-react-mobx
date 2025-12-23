import { createContext } from 'react'
import { usuarioStore } from './usuarioStore'
import { transacoesStore } from './transacoesStore'
import { contasStore } from './contasStore'

interface StoreContextType {
    usuarioStore: typeof usuarioStore
    transacoesStore: typeof transacoesStore
    contasStore: typeof contasStore
}

export const StoreContext = createContext<StoreContextType | null>(null)
