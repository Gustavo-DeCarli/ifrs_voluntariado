import { useEffect, useState } from 'react'
import { http } from '../api/http'
import '../Table.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

export default function Eventos() {
  const navigate = useNavigate()
  const [eventos, setEventos] = useState({ listagem: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [msgAdm, setMsgAdm] = useState('Carregando...')
  const { user } = useAuth()


  useEffect(() => {
    http
      .get('/events')
      .then(({ data }) => {
        setEventos(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const excluirEvento = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este evento?')) {
      http
        .delete(`/events/${id}`)
        .then(() => {
          setEventos({
            listagem: eventos.listagem.filter(evento => evento.id !== id),
          }); 
          alert('Evento excluído com sucesso!')
        })
        .catch((e) => {
          alert('Erro ao excluir o evento. Tente novamente mais tarde.')
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
      <h1>Listagem de Eventos</h1>
      {user.role == 'admin' && (
        <button className="btn" onClick={() => navigate('/IncluirEvento')}>Incluir</button>
      )}
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            {user.role == 'admin' && <th>Ações</th>}
          </tr>
        </thead>
        <tbody>
          { }
          {eventos.listagem.map((evento) => (
            <tr key={evento.id}>
              <td>{evento.nome}</td>
              <td>{new Date(evento.data).toLocaleDateString('pt-BR')}</td>
              {user.role == 'admin' && (
                <td>
                  <button className="btnEdt" onClick={() => navigate(`/EditarEvento/${evento.id}`)}>Editar</button>
                  <button className="btnDel" onClick={() => excluirEvento(evento.id)}>Excluir</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
