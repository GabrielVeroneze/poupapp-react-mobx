import styled from 'styled-components'

export const Container = styled.div`
    box-sizing: border-box;
    display: grid;
    gap: var(--gap-s);
    grid-template-areas:
        'sidebar search'
        'sidebar usuario'
        'sidebar orcamento'
        'sidebar movimentacoes'
        'sidebar chart';
    grid-template-columns: 280px 1fr;
    grid-template-rows: auto auto 1fr auto;
    min-width: 1260px;
`

export const Orcamento = styled.section`
    display: flex;
    gap: var(--gap-l);
    grid-area: orcamento;
    justify-content: space-between;
`

export const Movimentacoes = styled.section`
    display: flex;
    gap: var(--gap-l);
    grid-area: movimentacoes;
`
