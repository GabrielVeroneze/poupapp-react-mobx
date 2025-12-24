import { autorun, makeAutoObservable } from 'mobx'
import type { TransacaoDados } from '@/types/TransacaoDados'
import type { NovaTransacao } from '@/types/NovaTransacao'

type GastosPorCategoria = Record<string, number>

class TransacoesStore {
    transacoes: TransacaoDados[] = []

    constructor() {
        makeAutoObservable(this)

        this.carregarDoLocalStorage()

        autorun(() => {
            localStorage.setItem('transacoes', JSON.stringify(this.transacoes))
        })
    }

    adicionaTransacao(novaTransacao: NovaTransacao) {
        const transacao: TransacaoDados = {
            id: crypto.randomUUID(),
            ...novaTransacao,
        }

        this.transacoes.push(transacao)
    }

    get gastosPorCategoria() {
        return this.transacoes
            .filter((transacao) => transacao.tipo === 'despesa')
            .reduce<GastosPorCategoria>((valorAcumulado, transacao) => {
                valorAcumulado[transacao.categoria] =
                    (valorAcumulado[transacao.categoria] || 0) + transacao.valor

                return valorAcumulado
            }, {})
    }

    private carregarDoLocalStorage() {
        const dados = localStorage.getItem('transacoes')

        if (dados) {
            try {
                this.transacoes = JSON.parse(dados)
            } catch (error) {
                console.error('TransacoesStore: carregarDoLocalStorage', error)
            }
        }
    }
}

export const transacoesStore = new TransacoesStore()
