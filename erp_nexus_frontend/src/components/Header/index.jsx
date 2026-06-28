import { Link } from 'react-router-dom'
import './styles.css'

export function Header() {
    return (
        <header className="header">
            <div className="header-marca">
                <span className="header-icone">⬡</span>
                <span className="header-nome">ERP Nexus</span>
            </div>
            <nav className="header-nav">
                <Link to="/">Início</Link>
                <Link to="/cadastro-cliente">Cadastrar Cliente</Link>
                <Link to="/cadastro-funcionario">Cadastrar Funcionário</Link>
                <Link to="/clientes">Clientes</Link>
                <Link to="/funcionarios">Funcionários</Link>
            </nav>
        </header>
    )
}