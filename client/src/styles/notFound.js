import styled from "styled-components";
import notFound from "../assets/images/404.jpeg";

export const Container = styled.div ``;

export const Wrapper = styled.div `
  width: 100%;
  height: 100vh;
  //background-color: red;
  background: url(${notFound});
  overflow: hidden;
`;