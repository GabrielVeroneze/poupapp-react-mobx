import { useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '@/mobx/useStore'
import { Container, ListaMovimentacoes } from './styled'
import type { NovaConta } from '@/types/NovaConta'
import Cartao from '@/components/Cartao'
import CartaoCabecalho from '@/components/Cartao/CartaoCabecalho'
import Botao from '@/components/Botao'
import WalletIcon from '@/components/Icones/WalletIcon'
import Modal from '@/components/Modal'
import Form from '@/components/Form'
import Fieldset from '@/components/Fieldset'
import Label from '@/components/Label'
import CampoTexto from '@/components/CampoTexto'
import Conta from './Conta'

const Contas = observer(() => {
    const { contasStore, usuarioStore } = useStore()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [novaConta, setNovaConta] = useState<NovaConta>({
        banco: '',
        saldo: 0,
    })

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const aoAdicionarConta = () => {
        contasStore.adicionarConta(novaConta)
        usuarioStore.atualizaOrcamentoComSaldo(novaConta.saldo)

        handleCloseModal()
    }

    return (
        <Cartao>
            <CartaoCabecalho>Minhas contas</CartaoCabecalho>
            <Container>
                <ListaMovimentacoes>
                    {contasStore.contas.map((conta) => (
                        <Conta key={conta.id} conta={conta} />
                    ))}
                </ListaMovimentacoes>
                <Botao $variante="neutro" onClick={() => handleOpenModal()}>
                    <WalletIcon />
                    Adicionar conta
                </Botao>
                {isModalOpen && (
                    <Modal
                        aoFechar={() => handleCloseModal()}
                        estaAberta={isModalOpen}
                        aoClicar={() => aoAdicionarConta()}
                        titulo="Adicionar conta bancária"
                        icon={<WalletIcon />}
                    >
                        <Form>
                            <Fieldset>
                                <Label htmlFor="banco">Banco</Label>
                                <CampoTexto
                                    type="text"
                                    id="banco"
                                    placeholder="Ex: Anybank"
                                    value={novaConta.banco}
                                    onChange={(e) =>
                                        setNovaConta({
                                            ...novaConta,
                                            banco: e.target.value,
                                        })
                                    }
                                />
                            </Fieldset>
                            <Fieldset>
                                <Label htmlFor="saldo">Saldo</Label>
                                <CampoTexto
                                    type="number"
                                    id="saldo"
                                    placeholder="R$ 500,00"
                                    value={novaConta.saldo}
                                    onChange={(e) =>
                                        setNovaConta({
                                            ...novaConta,
                                            saldo: Number(e.target.value),
                                        })
                                    }
                                />
                            </Fieldset>
                        </Form>
                    </Modal>
                )}
            </Container>
        </Cartao>
    )
})

export default Contas
