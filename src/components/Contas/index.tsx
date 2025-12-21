import { useState } from 'react'
import { Container, ListaMovimentacoes } from './styled'
import type { ContaBancaria } from '@/types/ContaBancaria'
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

interface ContasProps {
    contas: ContaBancaria[]
}

const Contas = ({ contas }: ContasProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [novaConta, setNovaConta] = useState({
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
        handleCloseModal()
    }

    return (
        <Cartao>
            <CartaoCabecalho>Minhas contas</CartaoCabecalho>
            <Container>
                <ListaMovimentacoes>
                    {contas.map((conta) => (
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
}
export default Contas
