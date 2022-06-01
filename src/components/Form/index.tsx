import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Logo from "../../Assets/form_logo.png";

import { Container, HeaderContainer, ButtonContainer } from "./styles";

type Inputs = {
  name: string;
  email: string;
  contact: string;
  password: string;
  confirmPassword: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup.string().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")]),
  })
  .required();

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  function onSubmit(userData: Inputs) {
    console.log(userData);
  }

  console.log(errors);

  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="logo Form" />
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
          <label>
            Confirmar Senha:
            <input
              placeholder=" confirme sua senha"
              {...register("confirmPassword", { required: true })}
            />
            {errors.password && <span>Este campo é obrigatório</span>}
          </label>
          <ButtonContainer type="submit">Enviar</ButtonContainer>
        </form>
      </Container>
    </>
  );
};
