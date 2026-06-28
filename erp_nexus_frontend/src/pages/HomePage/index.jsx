import { Link } from 'react-router-dom'
import './styles.css'

export default function HomePage() {
    return (
        <div className="home-page">
            <div className="home-hero">
                <h1>Bem-vindo ao <span className="home-destaque">ERP Nexus</span></h1>
                <p className="home-descricao">
                    Sistema de gestão interna para cadastro e gerenciamento
                    de clientes e funcionários de forma centralizada.
                </p>
            </div>

            <div className="home-cards">
                <div className="home-card">
                    <span className="home-card-icone">👥</span>
                    <h2>Clientes</h2>
                    <p>Cadastre e consulte os clientes da sua organização.</p>
                    <div className="home-card-acoes">
                        <Link to="/cadastro-cliente">Cadastrar</Link>
                        <Link to="/clientes">Ver lista</Link>
                    </div>
                </div>
                <div className="home-card">
                    <span className="home-card-icone">🏢</span>
                    <h2>Funcionários</h2>
                    <p>Gerencie os colaboradores da sua equipe.</p>
                    <div className="home-card-acoes">
                        <Link to="/cadastro-funcionario">Cadastrar</Link>
                        <Link to="/funcionarios">Ver lista</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}