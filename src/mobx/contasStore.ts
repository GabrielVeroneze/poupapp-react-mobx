import { makeAutoObservable } from 'mobx'
import type { ContaBancaria } from '@/types/ContaBancaria'
import type { NovaConta } from '@/types/NovaConta'

class ContasStore {
    contas: ContaBancaria[] = []

    constructor() {
        makeAutoObservable(this)
    }

    adicionarConta(novaConta: NovaConta) {
        const conta: ContaBancaria = {
            id: crypto.randomUUID(),
            ...novaConta,
        }

        this.contas.push(conta)
    }
}

export const contasStore = new ContasStore()
