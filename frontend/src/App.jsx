import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import RequireAuth from './auth/RequireAuth'
import RequireRole from './auth/RequireRole'
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Forbidden from './pages/Forbidden'
import Eventos from './pages/Eventos'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import IncluirEvento from './pages/IncluirEvento'
import EditarEvento from './pages/EditarEvento'
import Users from './pages/Users'
import IncluirUser from './pages/IncluirUser'
import EditarUser from './pages/EditarUser'

function NotFound() {
  return (
    <main className="container">
      <h1>404 — Página não encontrada</h1>
      <p>Verifique a URL ou volte para a Home.</p>
    </main>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: 'login', element: <Login /> },
      { path: 'forbidden', element: <Forbidden /> },
      { path: 'events', element: <Eventos /> },
      {
        path: 'dashboard',
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: 'Admin',
        element: (
          <RequireAuth>
            <RequireRole role="admin">
              <Admin />
            </RequireRole>
          </RequireAuth>
        ),
      },
      {
        path: 'IncluirEvento',
        element: (
          <RequireAuth>
            <RequireRole role="admin">
              <IncluirEvento />
            </RequireRole>
          </RequireAuth>
        ),
      },
      {
        path: 'EditarEvento/:id',
        element: (
          <RequireAuth>
            <RequireRole role="admin">
              <EditarEvento />
            </RequireRole>
          </RequireAuth>
        ),
      },
      {
        path: 'Users',
        element: (
          <RequireAuth>
            <RequireRole role="admin">
              <Users />
            </RequireRole>
          </RequireAuth>
        ),
      },
      {
        path: 'IncluirUser',
        element: (
          <RequireAuth>
            <RequireRole role="admin">
              <IncluirUser />
            </RequireRole>
          </RequireAuth>
        ),
      },
      {
        path: 'EditarUser/:id',
        element: (
          <RequireAuth>
            <RequireRole role="admin">
              <EditarUser />
            </RequireRole>
          </RequireAuth>
        ),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
