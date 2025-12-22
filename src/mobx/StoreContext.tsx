import { createContext } from 'react'
import { usuarioStore } from './usuarioStore'

interface StoreContextType {
    usuarioStore: typeof usuarioStore
}

const StoreContext = createContext<StoreContextType | null>(null)

interface StoreProviderProps {
    children: React.ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    return (
        <StoreContext.Provider value={{ usuarioStore }}>
            {children}
        </StoreContext.Provider>
    )
}
