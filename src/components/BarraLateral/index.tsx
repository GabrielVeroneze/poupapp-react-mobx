import { Imagem, Rodape, Sidebar } from './styled'
import logo from '@/assets/images/logo.png'

const BarraLateral = () => {
    return (
        <Sidebar>
            <Imagem src={logo} alt="Logotipo da poupeapp" />
            <Rodape>
                Desenvolvido por Alura. Projeto fictício sem fins comerciais.
            </Rodape>
        </Sidebar>
    )
}
export default BarraLateral
