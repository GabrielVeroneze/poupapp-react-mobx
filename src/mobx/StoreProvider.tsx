import { StoreContext } from './StoreContext'
import { usuarioStore } from './usuarioStore'
import { transacoesStore } from './transacoesStore'
import { contasStore } from './contasStore'

interface StoreProviderProps {
    children: React.ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    return (
        <StoreContext.Provider
            value={{
                usuarioStore: usuarioStore,
                transacoesStore: transacoesStore,
                contasStore: contasStore,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
