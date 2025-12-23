import { Container, Movimentacoes, Orcamento } from './styled'
import BarraLateral from '@/components/BarraLateral'
import BarraPesquisa from '@/components/BarraPesquisa'
import SaudacaoUsuario from '@/components/SaudacaoUsuario'
import OrcamentoDiario from '@/components/OrcamentoDiario'
import MetaFinanceira from '@/components/MetaFinanceira'
import Transacoes from '@/components/Transacoes'
import Contas from '@/components/Contas'
import BalancoFinanceiro from '@/components/BalancoFinanceiro'

function Home() {
    return (
        <Container>
            <BarraLateral />
            <BarraPesquisa />
            <SaudacaoUsuario />
            <Orcamento>
                <OrcamentoDiario />
                <MetaFinanceira />
            </Orcamento>
            <Movimentacoes>
                <Transacoes />
                <Contas />
            </Movimentacoes>
            <BalancoFinanceiro />
        </Container>
    )
}

export default Home
