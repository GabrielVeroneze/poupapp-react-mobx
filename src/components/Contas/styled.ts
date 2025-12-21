import styled from 'styled-components'
import CartaoCorpo from '@/components/Cartao/CartaoCorpo'

export const Container = styled(CartaoCorpo)`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: var(--padding-l) var(--padding-m);
`

export const ListaMovimentacoes = styled.ul`
    color: var(--cor-primaria);
    height: 200px;
    list-style: none;
    margin: 0;
    overflow: auto;
    padding-bottom: var(--padding-m);
    padding-left: 0px;
    scrollbar-width: none;
    width: 100%;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`
