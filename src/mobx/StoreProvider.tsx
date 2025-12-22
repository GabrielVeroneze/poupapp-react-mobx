import { StoreContext } from './StoreContext'
import { usuarioStore } from './usuarioStore'

interface StoreProviderProps {
    children: React.ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    return (
        <StoreContext.Provider value={{ usuarioStore: usuarioStore }}>
            {children}
        </StoreContext.Provider>
    )
}
