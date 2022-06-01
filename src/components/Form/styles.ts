import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
    padding-top: 40px;

    gap: 10px;

    input {
      height: 50px;
      width: 400px;

      display: flex;
      align-items: center;
    }

    span {
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
    width: 350px;
  }
`;

export const ButtonContainer = styled.button`
  height: 50px;
  width: 200px;
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
