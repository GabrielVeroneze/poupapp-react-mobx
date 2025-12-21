import { formatadorMoeda } from '@/utils/formatadorMoeda'
import { formatadorData } from '@/utils/formatadorData'
import { ItemTransacao, SaldoTransacao, TituloTransacao } from './styled'
import type { TransacaoDados } from '@/types/TransacaoDados'

interface TransacaoProps {
    transacao: TransacaoDados
}

const Transacao = ({ transacao }: TransacaoProps) => {
    return (
        <ItemTransacao>
            <TituloTransacao $tipo={transacao.tipo}>
                <h3>{transacao.nome}</h3>
                <span>{formatadorMoeda.format(transacao.valor)}</span>
            </TituloTransacao>
            <SaldoTransacao>
                <p>{formatadorData(transacao.data)}</p>
            </SaldoTransacao>
        </ItemTransacao>
    )
}

export default Transacao
