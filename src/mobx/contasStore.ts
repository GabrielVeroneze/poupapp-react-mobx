import { autorun, makeAutoObservable } from 'mobx'
import type { ContaBancaria } from '@/types/ContaBancaria'
import type { NovaConta } from '@/types/NovaConta'

class ContasStore {
    contas: ContaBancaria[] = []

    constructor() {
        makeAutoObservable(this)

        this.carregarDoLocalStorage()

        autorun(() => {
            localStorage.setItem('contas', JSON.stringify(this.contas))
        })
    }

    adicionarConta(novaConta: NovaConta) {
        const conta: ContaBancaria = {
            id: crypto.randomUUID(),
            ...novaConta,
        }

        this.contas.push(conta)
    }

    private carregarDoLocalStorage() {
        const dados = localStorage.getItem('contas')

        if (dados) {
            try {
                this.contas = JSON.parse(dados)
            } catch (error) {
                console.error('ContasStore: carregarDoLocalStorage', error)
            }
        }
    }
}

export const contasStore = new ContasStore()
