import React, { useState } from "react";
import { NewTechStyled } from "./NewTechStyled";
import { useForm } from "react-hook-form";

const NewTechModal = ({ isOpen, setOpenModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (isOpen) {
    return (
      <NewTechStyled>
        <div className="modalContainer">
          <div className="headerModal">
            <h3>Cadastrar Tecnologia</h3>
            <button onClick={handleCloseModal}>X</button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <label htmlFor="title">Nome</label>
              <input type="text" id="title" {...register("title")} />
              <span>{errors.email?.message}</span>
            </fieldset>

            <label htmlFor="status">Selecionar status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </NewTechStyled>
    );
  }

  return null;
};

export default NewTechModal;
