import styled from 'styled-components'

export const ModalOverlay = styled.div`
    align-items: center;
    background-color: rgba(245, 245, 245, 0.5);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    width: 100%;
`

export const ModalContainer = styled.dialog`
    background-color: var(--cor-neutra-dark);
    border: none;
    border-radius: var(--border-radius-s);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    color: var(--cor-neutra-light);
    padding: var(--padding-m);
    position: relative;
    width: 400px;
`

export const ModalHeader = styled.div`
    align-items: center;
    display: flex;
    font-size: var(--fonte-xl);
    font-weight: 700;
    justify-content: space-between;
    margin-bottom: 20px;

    & > div {
        align-items: center;
        display: flex;
        gap: var(--gap-xs);

        & > svg {
            height: 38px;
            width: 32px;
        }
    }
`

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: var(--cor-neutra-light);
    cursor: pointer;
    font-size: var(--fonte-xl);
`

export const ButtonGroup = styled.div`
    display: flex;
    gap: var(--gap-s);
    justify-content: flex-end;
`
