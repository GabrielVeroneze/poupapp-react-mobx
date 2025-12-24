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
import { observer } from 'mobx-react'
import { useStore } from '@/mobx/useStore'
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

const BalancoFinanceiro = observer(() => {
    const { transacoesStore } = useStore()

    const categoriasAgrupadas = transacoesStore.gastosPorCategoria

    const data = {
        labels: Object.keys(categoriasAgrupadas),
        datasets: [
            {
                label: 'Gastos por categoria',
                data: Object.values(categoriasAgrupadas),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <Cartao>
            <CartaoCabecalho>Gastos por categoria</CartaoCabecalho>
            <CartaoCorpo>
                <AreaChart>
                    <Pie
                        data={data}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'right',
                                },
                            },
                        }}
                    />
                </AreaChart>
            </CartaoCorpo>
        </Cartao>
    )
})

export default BalancoFinanceiro
