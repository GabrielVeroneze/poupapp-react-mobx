import { useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '@/mobx/useStore'
import { Container, ListaMovimentacoes } from '@/components/Contas/styled'
import Cartao from '@/components/Cartao'
import CartaoCabecalho from '@/components/Cartao/CartaoCabecalho'
import Botao from '@/components/Botao'
import MoneyIcon from '@/components/Icones/MoneyIcon'
import Transacao from './Transacao'
import TransacaoModal from './TransacaoModal'

const Transacoes = observer(() => {
    const { transacoesStore } = useStore()
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
                    {transacoesStore.transacoes.map((transacao) => (
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
})

export default Transacoes
