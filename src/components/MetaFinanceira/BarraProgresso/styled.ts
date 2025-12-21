import styled from 'styled-components'

export const BarraContainer = styled.div`
    background-color: var(--cor-neutra-dark);
    border-radius: var(--border-radius-s);
    height: 40px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    width: 300px;
`

export const StyledBarraProgresso = styled.div<{ $progresso: number }>`
    background-color: var(--cor-primaria);
    height: 100%;
    transition: width 0.5s ease-in-out;
    width: ${({ $progresso }) => $progresso}%;
`

export const TextoProgresso = styled.div`
    align-items: center;
    bottom: 0;
    color: var(--cor-neutra-light);
    display: flex;
    font-size: 1rem;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`
