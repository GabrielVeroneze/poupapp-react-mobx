import { AreaChart } from './styled'
import Cartao from '@/components/Cartao'
import CartaoCabecalho from '@/components/Cartao/CartaoCabecalho'
import CartaoCorpo from '@/components/Cartao/CartaoCorpo'

const BalancoFinanceiro = () => {
    return (
        <Cartao>
            <CartaoCabecalho>Gastos por categoria</CartaoCabecalho>
            <CartaoCorpo>
                <AreaChart></AreaChart>
            </CartaoCorpo>
        </Cartao>
    )
}
export default BalancoFinanceiro
