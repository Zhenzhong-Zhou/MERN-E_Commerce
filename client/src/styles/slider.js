import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

export const Arrow = styled.div `
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

export const Wrapper = styled.div `
  height: 100%;
`;

export const SlideContainer = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div `
  height: 100%;
  flex: 1
`;

export const Image = styled.img `
  height: 80%;
`;

export const InfoContainer= styled.div `
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1 `
  font-size: 70px;
`;

export const Description = styled.p `
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button `
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
