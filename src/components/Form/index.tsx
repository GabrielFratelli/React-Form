import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Logo from "../../Assets/form_logo.png";

import { Container, HeaderContainer, ButtonContainer } from "./styles";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup
  .object({
    name: yup
    .string()
    .required("Este campo é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Este campo é obrigatório"),
    confirmPassword: yup
      .string()
      .required("Este campo é obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem coincidir"),
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

  function onSubmit(userData: Inputs) {}

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
              type="text"
              placeholder=" digite seu nome"
              {...register("name", { required: true })}
            />
            {errors.name && <p>{errors.name?.message}</p>}
          </label>
          <label>
            Email:
            <input
              type="text"
              placeholder=" exemplo@mail.com"
              {...register("email", { required: true })}
            />
            {errors.email && <p>{errors.email?.message}</p>}
          </label>
          <label>
            Senha:
            <input
              type="password"
              placeholder=" digite sua senha"
              {...register("password", { required: true })}
            />
            {errors.password && <p>{errors.password?.message}</p>}
          </label>
          <label>
            Confirmar Senha:
            <input
              type="password"
              placeholder=" confirme sua senha"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
          </label>
          <ButtonContainer type="submit">Enviar</ButtonContainer>
        </form>
      </Container>
    </>
  );
};
