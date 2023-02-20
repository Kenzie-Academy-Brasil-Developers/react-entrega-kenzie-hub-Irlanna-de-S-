import React from "react";
import Button from "../../Button/Button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../services/Api";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../../../pages/Login/index";

const FormLogin = ({ setUser }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const User = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", response.data.token);
      setUser(response.data.user);
      navigate("/dashboard");
      toast.success(`Usúario logado com sucesso`);
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha inválido.");
    }
  };
  return (
    <form onSubmit={handleSubmit(User)}>
      <h1>Login</h1>

      <fieldset>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="samuel@kenzie.com.br"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="name">Senha</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          placeholder="●●●●●●●●●●●●●"
        />
      </fieldset>
      <button>Entrar</button>
      <span>Ainda não possui uma conta?</span>
      <StyledLink to="/register">Cadastre-se</StyledLink>
    </form>
  );
};

export default FormLogin;
