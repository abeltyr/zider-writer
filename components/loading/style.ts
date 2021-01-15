import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { theme } from "../../styles/theme";

const bounce = keyframes`
  0%, 50%, 100% {
    transform: scale(1.25);
    filter: blur(0px);
  }
  25% {
    transform: scale(1);
    filter: blur(0.25px);
  }
  75% {
    filter: blur(0.5px);
    transform: scale(1.5);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: ${theme.primary1};
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 5vw;
    height: 5vw;
    border-radius: 100%;
    margin: 2vw;
    background-image: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    @media (min-width: 780px) {
      width: 3vw;
      height: 3vw;
    }
    animation: ${bounce} 1.5s linear infinite;
  }
  div:nth-of-type(2) {
    animation-delay: 0.75s;
  }
`;

export const Blue = styled.div`
  background-color: ${theme.primary5};
`;

export const Green = styled.div`
  background-color: ${theme.primary3};
`;

