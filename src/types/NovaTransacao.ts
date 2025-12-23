import type { TransacaoDados } from '@/types/TransacaoDados'

export type NovaTransacao = Omit<TransacaoDados, 'id'>
