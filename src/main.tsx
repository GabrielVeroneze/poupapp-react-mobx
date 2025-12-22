import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from '@/mobx/StoreProvider'
import GlobalStyle from '@/styles/Global.js'
import AppRoutes from '@/routes'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoreProvider>
            <GlobalStyle />
            <AppRoutes />
        </StoreProvider>
    </StrictMode>,
)
