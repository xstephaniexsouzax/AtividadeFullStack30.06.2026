import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import HomePage from './pages/HomePage/index.jsx'
import CadastroClientePage from './pages/CadastroClientePage/index.jsx'
import CadastroFuncionarioPage from './pages/CadastroFuncionarioPage/index.jsx'
import ListaClientesPage from './pages/ListaClientesPage/index.jsx'
import ListaFuncionariosPage from './pages/ListaFuncionariosPage/index.jsx'

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cadastro-cliente" element={<CadastroClientePage />} />
                <Route path="/cadastro-funcionario" element={<CadastroFuncionarioPage />} />
                <Route path="/clientes" element={<ListaClientesPage />} />
                <Route path="/funcionarios" element={<ListaFuncionariosPage />} />
            </Routes>
            <Footer />
            <ToastContainer position="top-right" autoClose={4000} />
        </>
    )
}