import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
    Legend,
    LinearScale,
    Tooltip,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { AreaChart } from './styled'
import Cartao from '@/components/Cartao'
import CartaoCabecalho from '@/components/Cartao/CartaoCabecalho'
import CartaoCorpo from '@/components/Cartao/CartaoCorpo'

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    Legend,
    LinearScale,
    Tooltip,
)

const BalancoFinanceiro = () => {
    return (
        <Cartao>
            <CartaoCabecalho>Gastos por categoria</CartaoCabecalho>
            <CartaoCorpo>
                <AreaChart>
                    <Pie />
                </AreaChart>
            </CartaoCorpo>
        </Cartao>
    )
}
export default BalancoFinanceiro
