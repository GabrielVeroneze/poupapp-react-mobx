import { observer } from 'mobx-react'
import { useStore } from '@/mobx/useStore'
import { formatadorMoeda } from '@/utils/formatadorMoeda'
import Cartao from '@/components/Cartao'
import CartaoCabecalho from '@/components/Cartao/CartaoCabecalho'
import CartaoCorpo from '@/components/Cartao/CartaoCorpo'
import Descricao from '@/components/Cartao/Descricao'

const OrcamentoDiario = observer(() => {
    const { usuarioStore } = useStore()

    return (
        <Cartao>
            <CartaoCabecalho>Orçamento diário disponível</CartaoCabecalho>
            <CartaoCorpo>
                <Descricao>
                    {formatadorMoeda.format(usuarioStore.orcamentoDiario)}
                </Descricao>
            </CartaoCorpo>
        </Cartao>
    )
})
export default OrcamentoDiario
