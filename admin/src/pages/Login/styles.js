import styled from "styled-components";

export const Container = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Error =styled.span `
  color: red;
`;

export const Title = styled.h1 `
  margin-bottom: 20px;
`;

export const Input = styled.input `
  padding: 10px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button `
  padding: 10px;
  width: 100px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;