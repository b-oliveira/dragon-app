import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../hooks";
import type { Login } from "../../types";
import { Button, Input } from "../../components";
import "./styles.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useSession();

  const [form, setForm] = useState<Login>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      login(form);
      navigate("/dragons");
    } catch (error) {
      alert("Erro ao realizar login");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Acesse sua conta</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <Input
            id="email"
            labelName="Email"
            type="email"
            placeholder="seu@email.com"
            required
            value={form.email}
            onChange={handleChange}
          />
          <Input
            id="password"
            labelName="Senha"
            type="password"
            placeholder="********"
            required
            value={form.password}
            onChange={handleChange}
          />
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </div>
  );
};
