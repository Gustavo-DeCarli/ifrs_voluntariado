// Rota protegida por RequireAuth + RequireRole('admin').
import { useEffect, useState } from "react";
import { http } from "../api/http";
export default function CadastroEvento() {
  const [msg, setMsg] = useState("Carregando...");
  useEffect(() => {
    http
      .get("/protected/CadastroEvento")
      .then(({ data }) => setMsg(data.message)) // ex.: "Bem-vindo à área de Cadastro de Evento, email"
      .catch(() => setMsg("Acesso negado"));
  }, []);
  return (
    <section className="card">
      <h1>Área de Cadastro de Evento</h1>
      <p>{msg}</p>
    </section>
  );
}
