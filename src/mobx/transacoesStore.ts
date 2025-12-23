import { makeAutoObservable } from 'mobx'
import type { TransacaoDados } from '@/types/TransacaoDados'

type NovaTransacao = Omit<TransacaoDados, 'id'>

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
