import { formatadorMoeda } from '@/utils/formatadorMoeda'
import Cartao from '@/components/Cartao'
import CartaoCabecalho from '@/components/Cartao/CartaoCabecalho'
import CartaoCorpo from '@/components/Cartao/CartaoCorpo'
import Descricao from '@/components/Cartao/Descricao'

const OrcamentoDiario = () => {
    const orcamentoDiario = 1000

    return (
        <Cartao>
            <CartaoCabecalho>Orçamento diário disponível</CartaoCabecalho>
            <CartaoCorpo>
                <Descricao>{formatadorMoeda.format(orcamentoDiario)}</Descricao>
            </CartaoCorpo>
        </Cartao>
    )
}
export default OrcamentoDiario
