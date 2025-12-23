import type { ContaBancaria } from '@/types/ContaBancaria'

export type NovaConta = Omit<ContaBancaria, 'id'>
