import styled from 'styled-components'

export const ItemConta = styled.li`
    align-items: center;
    border-bottom: 1px solid var(--cor-neutra-medium);
    color: var(--cor-neutra-light);
    display: flex;
    justify-content: space-between;
    padding: var(--padding-m) 0;

    &:nth-child(1) {
        padding-top: 0;
    }
`

export const TituloConta = styled.div`
    align-items: center;
    display: flex;
    gap: var(--gap-xs);

    & > h3 {
        margin: 0;
    }
`

export const SaldoConta = styled.div`
    text-align: start;

    & > p {
        margin: 0;
    }
`
