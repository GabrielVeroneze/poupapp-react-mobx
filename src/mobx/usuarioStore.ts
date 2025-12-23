import { makeAutoObservable } from 'mobx'
import type { DadosUsuario } from '@/types/DadosUsuario'
import type { ObjetivoFinanceiro } from '@/types/ObjetivoFinanceiro'

const DIAS_DO_MES = 30

class UsuarioStore {
    nome: string = ''
    renda: number = 0
    objetivoFinanceiro: ObjetivoFinanceiro = 'economizar'
    orcamentoDiario: number = 0
    metas: Record<ObjetivoFinanceiro, number> = {
        economizar: 0.2,
        investir: 0.15,
        'controlar-gastos': 0.8,
    }
    objetivosTipos: Record<ObjetivoFinanceiro, string> = {
        economizar: 'Economizar',
        investir: 'Investir',
        'controlar-gastos': 'Controlar gastos',
    }

    constructor() {
        makeAutoObservable(this)
    }

    defineDadosUsuario({ nome, renda, objetivoFinanceiro }: DadosUsuario) {
        this.nome = nome
        this.renda = renda
        this.objetivoFinanceiro = objetivoFinanceiro
        this.calculaOrcamentoDiario()
    }

    calculaOrcamentoDiario() {
        this.orcamentoDiario = Math.floor(this.renda / DIAS_DO_MES)
    }

    get objetivoFinanceiroAtual() {
        if (!this.objetivosTipos[this.objetivoFinanceiro]) {
            return null
        }

        return this.objetivosTipos[this.objetivoFinanceiro]
    }

    get progressoMeta() {
        const percentual = this.metas[this.objetivoFinanceiro]
        const metaMensal = this.renda * percentual

        if (!metaMensal) return 0

        if (this.objetivoFinanceiro === 'controlar-gastos') {
            return ((metaMensal - this.orcamentoDiario) / metaMensal) * 100
        }

        return (this.orcamentoDiario / metaMensal) * 100
    }
}

export const usuarioStore = new UsuarioStore()
