import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { theme } from "../../styles/theme";

const opacity = keyframes`
  0%, 100% {
    opacity: 0.25;
  }
  50% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  background: ${theme.primary1};
  width: 100%;
  height: 100%;
  display: grid;
  align-content: flex-start;
  justify-content: center;
  @media (max-width: 400px) {
    padding-top: 40%; 
  }
`;

export const Four0FourContainer = styled.div`
  font-size: 20em;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: bold;
  span {
    color: ${theme.primary3};
  }
  @media (max-width: 700px) {
    font-size: 18em;
  }
  @media (max-width: 560px) {
    font-size: 17em;
  }
  @media (max-width: 500px) {
    font-size: 15em;
  }
  @media (max-width: 450px) {
    font-size: 13em;
  }
  @media (max-width: 400px) {
    font-size: 12em;
  }
  @media (max-width: 375px) {
    font-size: 10em;
  }
  @media (max-width: 325px) {
    font-size: 9em;
  }
  span:nth-of-type(2) {
    color: ${theme.primary5};
    animation: ${opacity} 2.5s linear infinite;
  }
`;

export const Message = styled.div`
  margin-top: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  color: ${theme.text};
  text-transform: capitalize;
  font-size: 3.5em;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 3em;
  }
  @media (max-width: 600px) {
    font-size: 2.5em;
  }
  @media (max-width: 375px) {
    font-size: 2em;
  }
`;

export const Four0FourButton = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
