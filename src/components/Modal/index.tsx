import { useEffect, useRef } from 'react'
import {
    ButtonGroup,
    CloseButton,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
} from './styled'
import Botao from '@/components/Botao'

interface ModalProps {
    icon?: React.ReactNode
    titulo: string
    children: React.ReactNode
    estaAberta: boolean
    aoFechar: () => void
    aoClicar: () => void
}

const Modal = ({
    icon,
    titulo,
    aoFechar,
    children,
    estaAberta,
    aoClicar,
}: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        const dialogNode = dialogRef.current
        if (!dialogNode) return

        if (estaAberta) {
            dialogNode.showModal()
        } else {
            dialogNode.close()
        }

        const handleClose = () => aoFechar()

        dialogNode.addEventListener('close', handleClose)

        return () => {
            dialogNode.removeEventListener('close', handleClose)
        }
    }, [estaAberta, aoFechar])

    return (
        <ModalOverlay>
            <ModalContainer ref={dialogRef}>
                <ModalHeader>
                    <div>
                        {icon}
                        {titulo}
                    </div>
                    <CloseButton onClick={aoFechar}>x</CloseButton>
                </ModalHeader>
                {children}
                <ButtonGroup>
                    <Botao $variante="secundario" onClick={aoFechar}>
                        Cancelar
                    </Botao>
                    <Botao $variante="primario" onClick={aoClicar}>
                        Adicionar
                    </Botao>
                </ButtonGroup>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default Modal
