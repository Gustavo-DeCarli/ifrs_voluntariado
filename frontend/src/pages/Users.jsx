import { useEffect, useState } from 'react'
import { http } from '../api/http'
import '../Table.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

export default function Users() {
  const navigate = useNavigate()
  const [users, setUsers] = useState({ listagem: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { user } = useAuth()


  useEffect(() => {
    http
      .get('/users')
      .then(({ data }) => {
        setUsers(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const excluirEvento = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      http
        .delete(`/users/${id}`)
        .then(() => {
          setUsers({
            listagem: users.listagem.filter(user => user.id !== id),
          }); 
          alert('Usuário excluído com sucesso!')
        })
        .catch(() => {
          alert('Erro ao excluir o usuário. Tente novamente mais tarde.')
        })
    }
  }

  if (loading) {
    return (
      <section className="card">
        <p>Carregando dados...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="card">
        <p>Não foi possível carregar os dados. Tente novamente mais tarde.</p>
      </section>
    )
  }

  return (
    <section className="card">
      <h1>Listagem de Usuários</h1>
      <button className="btn" onClick={() => navigate('/IncluirEvento')}>Incluir</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          { }
          {users.listagem.map((evento) => (
            <tr key={evento.id}>
              <td>{evento.nome}</td>
              <td>{new Date(evento.data).toLocaleDateString('pt-BR')}</td>
              <td>
                <button className="btnEdt" onClick={() => navigate(`/EditarEvento/${evento.id}`)}>Editar</button>
                <button className="btnDel" onClick={() => excluirEvento(evento.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
