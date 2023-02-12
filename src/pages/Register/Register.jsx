import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const registerUser = data => {
    console.log(data);
   
  };

  return (
    
      <form onSubmit={handleSubmit(registerUser)}>
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa</p>

        <fieldset>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite aqui seu nome"
            //ref={register}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite aqui seu email"
            //ref={register}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite aqui sua senha"
            //ref={register}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            //ref={register}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Fale sobre você"
            //ref={register}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="contact">Contato:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Opção de contato"
            //ref={register}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="module">Selecionar módulo:</label>
          <select id="module" name="module" >
            <option value="Modulo 1">Modulo 1</option>
            <option value="Modulo 2">Modulo 2</option>
            <option value="Modulo 3">Modulo 3</option>
            <option value="Modulo 4">Modulo 4</option>
            <option value="Modulo 5">Modulo 5</option>
          </select>
        </fieldset>      
        <button type="submit">Enviar</button>
    </form>
  )
}

export default Register
