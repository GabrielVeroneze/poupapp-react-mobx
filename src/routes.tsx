import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Cadastro from '@/pages/Cadastro'
import Home from '@/pages/Home'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
