export type TipoTransacao = 'receita' | 'despesa'

export interface TransacaoDados {
    id: number
    nome: string
    valor: number
    tipo: TipoTransacao
    categoria: string
    data: string
}
