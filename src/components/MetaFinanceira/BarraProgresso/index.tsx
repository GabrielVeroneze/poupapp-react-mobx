import { BarraContainer, StyledBarraProgresso, TextoProgresso } from './styled'

const BarraProgresso = () => {
    const progressoMeta = 50

    return (
        <BarraContainer>
            <StyledBarraProgresso $progresso={progressoMeta} />
            <TextoProgresso>{progressoMeta}%</TextoProgresso>
        </BarraContainer>
    )
}

export default BarraProgresso
