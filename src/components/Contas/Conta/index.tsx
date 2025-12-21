import { ItemConta, SaldoConta, TituloConta } from './styled'
import type { ContaBancaria } from '@/types/ContaBancaria'
import BankIcon from '@/components/Icones/BankIcon'

interface ContaProps {
    conta: ContaBancaria
}

const Conta = ({ conta }: ContaProps) => {
    return (
        <ItemConta>
            <TituloConta>
                <BankIcon />
                <h3>{conta.banco}</h3>
            </TituloConta>
            <SaldoConta>
                <p>Saldo</p>
                <span>{conta.saldo}</span>
            </SaldoConta>
        </ItemConta>
    )
}

export default Conta
