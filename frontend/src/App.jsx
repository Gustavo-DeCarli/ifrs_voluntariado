// Roteador principal: define rotas públicas, protegidas e o layout base.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import RequireAuth from "./auth/RequireAuth";
import RequireRole from "./auth/RequireRole";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Forbidden from "./pages/Forbidden";
import Listagem from "./pages/Listagem";
import Admin from "./pages/Admin";
import CadastroEvento from "./pages/CadastroEvento";

// (Opcional) Fallback simples para rotas inexistentes
function NotFound() {
  return (
    <main className="container">
      <h1>404 — Página não encontrada</h1>
      <p>Verifique a URL ou volte para a Home.</p>
    </main>
  );
}
// Árvore de rotas aninhadas sob o RootLayout.
// O <Outlet /> do RootLayout renderiza os filhos declarados em "children".
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />, // opcional
    children: [
      // públicas
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "forbidden", element: <Forbidden /> },
      { path: "listagem", element: <Listagem /> },
      // protegida por autenticação + papel específico (admin)
      {
        path: "CadastroEvento",
        element: (
          <RequireAuth>
            <RequireRole role="admin">
              <CadastroEvento />
            </RequireRole>
          </RequireAuth>
        ),
      },
      // fallback interno (opcional)
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  // O AuthProvider envolve o Router para que todas as rotas
  // tenham acesso a user/token/login/logout via contexto.
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
