import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
    padding-top: 1.5rem;

    gap: 2rem;

    input {
      height: 3.5rem;
      width: 25rem;

      display: flex;
      align-items: center;
    }

    p {
      font-size: 1rem;
      color: var(--red);
    }
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: 3rem;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21.5rem;
  }
`;

export const ButtonContainer = styled.button`
  height: 3rem;
  width: 12rem;
  font-weight: 400;
  color: var(--opaco);
  background-color: var(--black);
  box-shadow: 0 0 0.5rem var(--opaco);
  border: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
