import styled from 'styled-components'

type Variante = keyof typeof varianteCores

const varianteCores = {
    primario: {
        background: 'var(--cor-primaria)',
        border: 'var(--cor-primaria)',
        color: 'var(--cor-neutra-dark)',
    },
    secundario: {
        background: 'transparent',
        border: 'var(--cor-primaria)',
        color: 'var(--cor-primaria)',
    },
    neutro: {
        background: 'transparent',
        border: 'var(--cor-neutra-light)',
        color: 'var(--cor-neutra-light)',
    },
}

const Botao = styled.button<{ $variante?: Variante }>`
    align-items: center;
    background-color: ${({ $variante = 'primario' }) =>
        varianteCores[$variante]?.background};
    border: 1px solid
        ${({ $variante = 'primario' }) => varianteCores[$variante]?.border};
    border-radius: var(--border-radius-l);
    color: ${({ $variante = 'primario' }) => varianteCores[$variante]?.color};
    cursor: pointer;
    display: flex;
    font-size: var(--fonte-md);
    gap: var(--gap-xs);
    padding: var(--padding-xs) var(--padding-m);
`

export default Botao
