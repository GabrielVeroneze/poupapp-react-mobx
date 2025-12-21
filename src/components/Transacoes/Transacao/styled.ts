import type { TipoTransacao } from '@/types/TransacaoDados'
import styled from 'styled-components'

export const ItemTransacao = styled.li`
    align-items: center;
    border-bottom: 1px solid var(--cor-neutra-medium);
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    padding-bottom: var(--padding-m);

    &:nth-child(1) {
        margin-top: 0;
    }
`

export const TituloTransacao = styled.div<{ $tipo: TipoTransacao }>`
    align-items: start;
    color: ${({ $tipo }) =>
        $tipo === 'receita'
            ? 'var(--cor-secundaria-receita)'
            : 'var(--cor-secundaria-despesa)'};
    display: flex;
    flex-direction: column;
    gap: var(--gap-xs);

    & > h3 {
        margin: 0;
    }
`

export const SaldoTransacao = styled.div`
    color: var(--cor-neutra-light);
    text-align: start;

    & > p {
        margin: 0;
        margin-bottom: 8px;
    }
`
