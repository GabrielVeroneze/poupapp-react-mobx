import { observer } from 'mobx-react'
import { useStore } from '@/mobx/useStore'
import { TituloMetaFinanceira } from './styled'
import Cartao from '@/components/Cartao'
import CartaoCabecalho from '@/components/Cartao/CartaoCabecalho'
import CartaoCorpo from '@/components/Cartao/CartaoCorpo'
import Descricao from '@/components/Cartao/Descricao'
import PigIcon from '@/components/Icones/PigIcon'
import BarraProgresso from './BarraProgresso'

const MetaFinanceira = observer(() => {
    const { usuarioStore } = useStore()

    return (
        <Cartao>
            <CartaoCabecalho>Progresso da meta financeira</CartaoCabecalho>
            <CartaoCorpo>
                <Descricao>
                    <TituloMetaFinanceira>
                        <PigIcon />
                        {usuarioStore.objetivoFinanceiroAtual}
                    </TituloMetaFinanceira>
                    <BarraProgresso />
                </Descricao>
            </CartaoCorpo>
        </Cartao>
    )
})

export default MetaFinanceira
