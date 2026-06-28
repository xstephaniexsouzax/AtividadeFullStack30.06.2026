import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'
import './styles.css'

export default function ListaClientesPage() {
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        async function buscarClientes() {
            try {
                const resposta = await api.get('/clientes')
                setClientes(resposta.data)
            } catch (error) {
                toast.error('Erro ao buscar clientes.')
            }
        }
        buscarClientes()
    }, [])

    return (
        <div className="lista-page">
            <h1>Lista de Clientes</h1>
            {clientes.length === 0 ? (
                <p className="lista-vazia">Nenhum cliente cadastrado.</p>
            ) : (
                <table className="lista-tabela">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.id}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefone}</td>
                                <td>{cliente.cpf}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}