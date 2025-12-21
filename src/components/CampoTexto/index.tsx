import styled from 'styled-components'

const CampoTexto = styled.input`
    background-color: var(--cor-neutra-dark-medium);
    border: none;
    border-radius: var(--border-radius-s);
    color: var(--cor-neutra-light);
    font-size: var(--fonte-md);
    padding: var(--padding-xs);
    width: 95%;

    &:focus {
        border-color: var(--cor-neutra-light);
        outline: none;
    }
`

export default CampoTexto
