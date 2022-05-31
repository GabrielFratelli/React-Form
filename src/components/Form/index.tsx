import React from "react";
import { useForm } from "react-hook-form";

import { Container } from "./styles";

export const Form = () => {
  return (
    <Container>
      <form action="#">
        <label>
          Name:
          <input />
        </label>
        <label>
          E-mail:
          <input />
        </label>
        <label>
          Genre:
          <select>
            <option value="empty"></option>
            <option value="Masculine">Masculine</option>
            <option value="Feminine">Feminine</option>
            <option value="Others">Others</option>
          </select>
        </label>
        <label>
          Password:
          <input />
        </label>
        <label>
          Confirm Password:
          <input />
        </label>
      </form>
    </Container>
  );
};
