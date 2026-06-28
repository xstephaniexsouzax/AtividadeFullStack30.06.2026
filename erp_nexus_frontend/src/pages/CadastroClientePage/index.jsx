import { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'
import './styles.css'

export default function CadastroClientePage() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cpf, setCpf] = useState('')
    const [estaEnviando, setEstaEnviando] = useState(false)

    function limparCamposDoFormulario() {
        setNome('')
        setEmail('')
        setTelefone('')
        setCpf('')
    }

    async function enviarFormulario(event) {
        event.preventDefault()
        setEstaEnviando(true)

        const dadosFormulario = { nome, email, telefone, cpf }

        try {
            const resposta = await api.post('/clientes', dadosFormulario)
            toast.success(resposta.data.mensagem)
            limparCamposDoFormulario()
        } catch (error) {
            const mensagemDoServidor = error.response?.data?.mensagem
            toast.error(mensagemDoServidor || 'Erro ao cadastrar cliente.')
        } finally {
            setEstaEnviando(false)
        }
    }

    return (
        <div className="cadastro-page">
            <h1>Cadastro de Cliente</h1>
            <form onSubmit={enviarFormulario} className="cadastro-form">
                <div className="grupo-form">
                    <label htmlFor="campo-nome">Nome:</label>
                    <input
                        type="text"
                        id="campo-nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Ex: Maria Silva"
                    />
                </div>
                <div className="grupo-form">
                    <label htmlFor="campo-email">E-mail:</label>
                    <input
                        type="email"
                        id="campo-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: maria@email.com"
                    />
                </div>
                <div className="grupo-form">
                    <label htmlFor="campo-telefone">Telefone:</label>
                    <input
                        type="text"
                        id="campo-telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="Ex: (11) 99999-9999"
                    />
                </div>
                <div className="grupo-form">
                    <label htmlFor="campo-cpf">CPF:</label>
                    <input
                        type="text"
                        id="campo-cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="Ex: 123.456.789-00"
                    />
                </div>
                <button type="submit" disabled={estaEnviando}>
                    {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </form>
        </div>
    )
}