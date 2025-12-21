import { useState } from 'react'
import { Container, ListaMovimentacoes } from '@/components/Contas/styled'
import type { TransacaoDados } from '@/types/TransacaoDados'
import Cartao from '@/components/Cartao'
import CartaoCabecalho from '@/components/Cartao/CartaoCabecalho'
import Botao from '@/components/Botao'
import MoneyIcon from '@/components/Icones/MoneyIcon'
import Transacao from './Transacao'
import TransacaoModal from './TransacaoModal'

interface TransacoesProps {
    transacoes: TransacaoDados[]
}

const Transacoes = ({ transacoes }: TransacoesProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <Cartao>
            <CartaoCabecalho>Movimentação financeira</CartaoCabecalho>
            <Container>
                <ListaMovimentacoes>
                    {transacoes.map((transacao) => (
                        <Transacao key={transacao.id} transacao={transacao} />
                    ))}
                </ListaMovimentacoes>
                <Botao $variante="neutro" onClick={() => handleOpenModal()}>
                    <MoneyIcon />
                    Adicionar transação
                </Botao>
                {isModalOpen && (
                    <TransacaoModal
                        isOpen={isModalOpen}
                        onCloseModal={() => handleCloseModal()}
                    />
                )}
            </Container>
        </Cartao>
    )
}
export default Transacoes
