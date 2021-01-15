import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { keyframes } from "@emotion/core";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: flex-start;
  position: relative;
  color: ${theme.text};
  .Bottom {
    padding-bottom: 400px;
  }
`;

export const ImageContainer = styled.div`
  margin-left: 2.5px;
  margin-right: 2.5px;
  border-radius: 4px;
  padding-left: 2px;
  padding-right: 2px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: #474c50;
  }
`;



export const EditIconContainer = styled.div`
  margin-left: 2.5px;
  margin-right: 2.5px;
  border-radius: 4px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: #474c50;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-self: center;
  user-select: none;
`;

export const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 0.037fr 1fr;
  justify-content: flex-start;
  position: relative;
  width: 800px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 1100px) {
    width: 750px;
  }

  @media screen and (max-width: ${theme.breakPoint.SL}) {
    width: 700px;
  }

  @media screen and (max-width: ${theme.breakPoint.MD}) {
    width: 600px;
  }

  @media screen and (max-width: ${theme.mobileBreakPoint.L}) {
    width: calc(100vw - 70px);
  }

  @media screen and (max-width: ${theme.mobileBreakPoint.M}) {
    width: calc(100vw - 35px);
  }

  @media screen and (max-width: ${theme.mobileBreakPoint.SP}) {
    width: calc(100vw - 25px);
  }

  @media screen and (max-width: ${theme.mobileBreakPoint.XSP}) {
    width: calc(100vw - 15px);
  }
`;

const menuAnimation = keyframes`
  0%{
    opacity: 0.5;
    transform: translateX(-10px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
`;

interface OptionProps {
  top: number;
  left: number;
}

export const Options = styled.div<OptionProps>`
  user-select: none;
  display: grid;
  align-content: flex-start;
  margin-top: ${(props) => `${props.top}px`};
  margin-left: ${(props) => `${props.left}px`};
  position: absolute;
  z-index: 1000;
  background: ${theme.secondary};
  width: 300px;
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: -5px -5px 35px ${theme.secondary}99;
  border-radius: 9px;
  color: ${theme.text};
  animation: ${menuAnimation} 0.25s linear;

  @media screen and (max-width: ${theme.mobileBreakPoint.XSP}) {
    width: 275px;
  }
`;

export const OptionTitle = styled.div`
  ${theme.medium_14}
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 7.5px;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  .Icons {
    display: flex;
    gap: 5px;
  }
`;

export const OptionData = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 0.2fr 1fr;
  padding-left: 15px;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  grid-gap: 10px;
  .left {
    background: ${theme.text};
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
  .right {
    .Title {
      ${theme.bold_16}
    }
    .SubText {
      ${theme.medium_12}
    }
  }
  :hover {
    background: ${theme.secondary1};
  }
`;
