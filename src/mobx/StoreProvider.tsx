import { StoreContext } from './StoreContext'
import { usuarioStore } from './usuarioStore'
import { transacoesStore } from './transacoesStore'

interface StoreProviderProps {
    children: React.ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    return (
        <StoreContext.Provider
            value={{
                usuarioStore: usuarioStore,
                transacoesStore: transacoesStore,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
