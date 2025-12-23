export type TipoTransacao = 'receita' | 'despesa'

export interface TransacaoDados {
    id: string
    nome: string
    valor: number
    tipo: TipoTransacao
    categoria: string
    data: string
}
