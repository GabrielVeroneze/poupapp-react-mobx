import { observer } from 'mobx-react'
import { useStore } from '@/mobx/useStore'
import { Usuario } from './styled'

const SaudacaoUsuario = observer(() => {
    const { usuarioStore } = useStore()

    return (
        <Usuario>
            <h1>Olá, {usuarioStore.nome}</h1>
            <p>Veja como estão suas finanças hoje.</p>
        </Usuario>
    )
})

export default SaudacaoUsuario
