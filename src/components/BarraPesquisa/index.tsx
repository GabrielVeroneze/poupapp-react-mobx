import { StyledLabel } from './styled'
import CampoTexto from '@/components/CampoTexto'
import SearchIcon from '@/components/Icones/SearchIcon'

const BarraPesquisa = () => {
    return (
        <StyledLabel htmlFor="search">
            <SearchIcon />
            <CampoTexto
                name="search"
                type="text"
                placeholder="Procure seu dinheiro"
            />
        </StyledLabel>
    )
}

export default BarraPesquisa
