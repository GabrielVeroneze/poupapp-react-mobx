import { observer } from 'mobx-react'
import { useStore } from '@/mobx/useStore'
import { BarraContainer, StyledBarraProgresso, TextoProgresso } from './styled'

const BarraProgresso = observer(() => {
    const { usuarioStore } = useStore()

    return (
        <BarraContainer>
            <StyledBarraProgresso $progresso={usuarioStore.progressoMeta} />
            <TextoProgresso>
                {usuarioStore.progressoMeta.toFixed(2)}%
            </TextoProgresso>
        </BarraContainer>
    )
})

export default BarraProgresso
