import { makeAutoObservable } from 'mobx'
import type { TransacaoDados } from '@/types/TransacaoDados'
import type { NovaTransacao } from '@/types/NovaTransacao'

class TransacoesStore {
    transacoes: TransacaoDados[] = []

    constructor() {
        makeAutoObservable(this)
    }

    adicionaTransacao(novaTransacao: NovaTransacao) {
        const transacao: TransacaoDados = {
            id: crypto.randomUUID(),
            ...novaTransacao,
        }

        this.transacoes.push(transacao)
    }
}

export const transacoesStore = new TransacoesStore()
