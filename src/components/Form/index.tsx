import React from "react";
import { useForm } from "react-hook-form";

import { Container, HeaderContainer, ButtonContainer } from "./styles";

export const Form = () => {
  return (
    <>
      <HeaderContainer>
        <strong>Preencha suas informações:</strong>
      </HeaderContainer>
      <Container>
        <form action="#">
          <label>
            Nome:
            <input placeholder=" digite seu nome" />
          </label>
          <label>
            E-mail:
            <input placeholder=" exemplo@exemplo.com" />
          </label>
          <label>
            Senha:
            <input placeholder=" digite sua senha" />
          </label>
          <label>
            Confirmar Senha:
            <input placeholder=" confirme senha" />
          </label>
          <ButtonContainer type="submit">Enviar</ButtonContainer>
        </form>
      </Container>
    </>
  );
};
