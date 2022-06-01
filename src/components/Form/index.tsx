import React from "react";
import { useForm } from "react-hook-form";

import { Container, HeaderContainer, ButtonContainer } from "./styles";

type Inputs = {
  name: string;
  email: string;
  contact: string;
  password: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(userData: any) {
    console.log(userData);
  }

  return (
    <>
      <HeaderContainer>
        <strong>Preencha suas informações:</strong>
      </HeaderContainer>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome:
            <input
              placeholder=" digite seu nome"
              {...register("name", { required: true })}
            />
            {errors.name && <span>Este campo é obrigatório</span>}
          </label>
          <label>
            E-mail:
            <input
              placeholder=" exemplo@exemplo.com"
              {...register("email", { required: true })}
            />
            {errors.email && <span>Este campo é obrigatório</span>}
          </label>
          <label>
            Contato:
            <input
              placeholder=" 91234-5678"
              {...register("contact", { required: true })}
            />
            {errors.contact && <span>Este campo é obrigatório</span>}
          </label>
          <label>
            Senha:
            <input
              placeholder=" digite sua senha"
              {...register("password", { required: true })}
            />
            {errors.password && <span>Este campo é obrigatório</span>}
          </label>
          <ButtonContainer type="submit">Enviar</ButtonContainer>
        </form>
      </Container>
    </>
  );
};
