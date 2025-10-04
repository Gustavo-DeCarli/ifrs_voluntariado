import { useEffect, useState } from 'react'
import { http } from '../api/http'
import '../Table.css'
import { useNavigate } from 'react-router-dom'

export default function Users() {
  const navigate = useNavigate()
  const [users, setUsers] = useState({ listagem: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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

  const excluirUser = (id) => {
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
      <button className="btn" onClick={() => navigate('/IncluirUser')}>Incluir</button>
      <hr/>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          { }
          {users.listagem.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btnEdt" onClick={() => navigate(`/EditarUser/${user.id}`)}>Editar</button>
                <button className="btnDel" onClick={() => excluirUser(user.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
