import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 10px;

    input {
      height: 25px;
      width: 250px;

      display: flex;
      align-items: center;

      &::placeholder {
        font-size: 10px;
      }
    }

    span {
      font-size: 0.5rem;
      color: var(--red);
    }
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  padding: 1.5rem;
`;

export const ButtonContainer = styled.button`
  height: 20px;
  width: 100px;
  font-weight: 400;
  color: var(--opaco);
  background-color: var(--black);
  box-shadow: 0 0 0.5rem var(--opaco);
  border: none;

  margin-top: 20px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
