import { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'
import '../CadastroClientePage/styles.css'

export default function CadastroFuncionarioPage() {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [cargo, setCargo] = useState('')
    const [setor, setSetor] = useState('')
    const [estaEnviando, setEstaEnviando] = useState(false)

    function limparCamposDoFormulario() {
        setNome('')
        setTelefone('')
        setEmail('')
        setCargo('')
        setSetor('')
    }

    async function enviarFormulario(event) {
        event.preventDefault()
        setEstaEnviando(true)

        const dadosFormulario = { nome, telefone, email, cargo, setor }

        try {
            const resposta = await api.post('/funcionarios', dadosFormulario)
            toast.success(resposta.data.mensagem)
            limparCamposDoFormulario()
        } catch (error) {
            const mensagemDoServidor = error.response?.data?.mensagem
            toast.error(mensagemDoServidor || 'Erro ao cadastrar funcionário.')
        } finally {
            setEstaEnviando(false)
        }
    }

    return (
        <div className="cadastro-page">
            <h1>Cadastro de Funcionário</h1>
            <form onSubmit={enviarFormulario} className="cadastro-form">
                <div className="grupo-form">
                    <label htmlFor="campo-nome">Nome:</label>
                    <input
                        type="text"
                        id="campo-nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Ex: João Santos"
                    />
                </div>
                <div className="grupo-form">
                    <label htmlFor="campo-telefone">Telefone:</label>
                    <input
                        type="text"
                        id="campo-telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="Ex: (11) 98888-7777"
                    />
                </div>
                <div className="grupo-form">
                    <label htmlFor="campo-email">E-mail:</label>
                    <input
                        type="email"
                        id="campo-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: joao@empresa.com"
                    />
                </div>
                <div className="grupo-form">
                    <label htmlFor="campo-cargo">Cargo:</label>
                    <input
                        type="text"
                        id="campo-cargo"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        placeholder="Ex: Analista de Sistemas"
                    />
                </div>
                <div className="grupo-form">
                    <label htmlFor="campo-setor">Setor:</label>
                    <input
                        type="text"
                        id="campo-setor"
                        value={setor}
                        onChange={(e) => setSetor(e.target.value)}
                        placeholder="Ex: Tecnologia da Informação"
                    />
                </div>
                <button type="submit" disabled={estaEnviando}>
                    {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </form>
        </div>
    )
}