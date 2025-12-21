import { TituloMetaFinanceira } from './styled'
import Cartao from '@/components/Cartao'
import CartaoCabecalho from '@/components/Cartao/CartaoCabecalho'
import CartaoCorpo from '@/components/Cartao/CartaoCorpo'
import Descricao from '@/components/Cartao/Descricao'
import PigIcon from '@/components/Icones/PigIcon'
import BarraProgresso from './BarraProgresso'

const MetaFinanceira = () => {
    return (
        <Cartao>
            <CartaoCabecalho>Progresso da meta financeira</CartaoCabecalho>
            <CartaoCorpo>
                <Descricao>
                    <TituloMetaFinanceira>
                        <PigIcon />
                        Economizar
                    </TituloMetaFinanceira>
                    <BarraProgresso />
                </Descricao>
            </CartaoCorpo>
        </Cartao>
    )
}
export default MetaFinanceira
