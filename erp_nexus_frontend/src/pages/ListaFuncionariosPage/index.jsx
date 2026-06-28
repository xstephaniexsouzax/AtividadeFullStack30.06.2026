import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'
import '../ListaClientesPage/styles.css'

export default function ListaFuncionariosPage() {
    const [funcionarios, setFuncionarios] = useState([])

    useEffect(() => {
        async function buscarFuncionarios() {
            try {
                const resposta = await api.get('/funcionarios')
                setFuncionarios(resposta.data)
            } catch (error) {
                toast.error('Erro ao buscar funcionários.')
            }
        }
        buscarFuncionarios()
    }, [])

    return (
        <div className="lista-page">
            <h1>Lista de Funcionários</h1>
            {funcionarios.length === 0 ? (
                <p className="lista-vazia">Nenhum funcionário cadastrado.</p>
            ) : (
                <table className="lista-tabela">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Cargo</th>
                            <th>Setor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios.map((funcionario) => (
                            <tr key={funcionario.id}>
                                <td>{funcionario.id}</td>
                                <td>{funcionario.nome}</td>
                                <td>{funcionario.email}</td>
                                <td>{funcionario.telefone}</td>
                                <td>{funcionario.cargo}</td>
                                <td>{funcionario.setor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}