// Importamos o Link para navegação entre rotas
// e o hook de autenticação para exibir login/logout dinamicamente
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        {/* brand separado da lista de links */}
        <ul className="nav-links">
          {user && (
            <li>
              <NavLink to="/listagem">Listagem</NavLink>
            </li>
          )}
          {!user && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {user && (
            <>
              {user.role === "admin" && (
                <li>
                  <NavLink to="/CadastroEvento">Admin</NavLink>
                </li>
              )}
              <li>
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
