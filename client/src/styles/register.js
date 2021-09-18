import styled from "styled-components";
import registerBg from "../assets/images/register_bg.jpeg";

export const Container = styled.div `
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), 
  				url(${registerBg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div `
  width: 40%;
  height: 30%;
  padding: 20px;
  background-color: white;
`;

export const Title = styled.h1 `
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form `
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const Input = styled.input `
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

export const Agreement = styled.span `
  font-size: 12px;
  margin: 20px 0;
`;

export const Button = styled.button `
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: -40px;
`;