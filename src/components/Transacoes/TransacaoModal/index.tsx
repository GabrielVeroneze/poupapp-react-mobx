import { useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '@/mobx/useStore'
import type { NovaTransacao } from '@/types/NovaTransacao'
import type { TipoTransacao } from '@/types/TransacaoDados'
import CampoTexto from '@/components/CampoTexto'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import MoneyIcon from '@/components/Icones/MoneyIcon'
import Label from '@/components/Label'
import Modal from '@/components/Modal'
import SelectGroup from '@/components/SelectGroup'
import SelectOption from '@/components/SelectOption'

interface TransacaoModalProps {
    isOpen: boolean
    onCloseModal: () => void
}

const TransacaoModal = observer(
    ({ isOpen, onCloseModal }: TransacaoModalProps) => {
        const { transacoesStore, usuarioStore } = useStore()
        const [novaTransacao, setNovaTransacao] = useState<NovaTransacao>({
            nome: '',
            valor: 0,
            tipo: 'receita',
            categoria: '',
            data: '',
        })

        const aoSubmeterFormModal = () => {
            transacoesStore.adicionaTransacao(novaTransacao)
            usuarioStore.atualizaOrcamentoDiario(novaTransacao)

            onCloseModal()
        }

        return (
            <Modal
                aoFechar={() => onCloseModal()}
                titulo="Adicionar transação"
                estaAberta={isOpen}
                icon={<MoneyIcon />}
                aoClicar={() => aoSubmeterFormModal()}
            >
                <Form>
                    <Fieldset>
                        <Label htmlFor="nomeTransacao">Nome da transação</Label>
                        <CampoTexto
                            type="text"
                            id="nomeTransacao"
                            placeholder="Ex: Compra na padaria"
                            value={novaTransacao.nome}
                            onChange={(e) =>
                                setNovaTransacao({
                                    ...novaTransacao,
                                    nome: e.target.value,
                                })
                            }
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor="valor">Valor</Label>
                        <CampoTexto
                            type="number"
                            id="valor"
                            placeholder="10"
                            value={novaTransacao.valor}
                            onChange={(e) =>
                                setNovaTransacao({
                                    ...novaTransacao,
                                    valor: Number(e.target.value),
                                })
                            }
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor="tipo">Tipo</Label>
                        <SelectGroup
                            id="tipo"
                            value={novaTransacao.tipo}
                            onChange={(e) =>
                                setNovaTransacao({
                                    ...novaTransacao,
                                    tipo: e.target.value as TipoTransacao,
                                })
                            }
                        >
                            <SelectOption value="">
                                Selecione o tipo
                            </SelectOption>
                            <SelectOption value="receita">Receita</SelectOption>
                            <SelectOption value="despesa">Despesa</SelectOption>
                        </SelectGroup>
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor="valor">Data</Label>
                        <CampoTexto
                            type="date"
                            id="valor"
                            placeholder="dd/mm/aaaa"
                            value={novaTransacao.data}
                            onChange={(e) =>
                                setNovaTransacao({
                                    ...novaTransacao,
                                    data: e.target.value,
                                })
                            }
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor="categoria">Categoria</Label>
                        <CampoTexto
                            type="text"
                            id="categoria"
                            placeholder="Alimentação"
                            value={novaTransacao.categoria}
                            onChange={(e) =>
                                setNovaTransacao({
                                    ...novaTransacao,
                                    categoria: e.target.value,
                                })
                            }
                        />
                    </Fieldset>
                </Form>
            </Modal>
        )
    },
)

export default TransacaoModal
