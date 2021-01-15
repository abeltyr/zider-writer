import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
interface ButtonData {
  backgroundColor: string;
  textColor: string;
  curve: string;
  loading: boolean;
  borderColor: string;
}

export const CustomButton = styled.button<ButtonData>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props: ButtonData) => props.textColor || theme.primary5};
  -webkit-appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  padding: 0px;
  border-radius: ${(props) => props.curve || "5px"};
  border: ${(props) =>
    props.backgroundColor
      ? "0px solid transparent"
      : ` 1px solid ${props.borderColor || theme.primary1}`};

  box-shadow: 0px 0px 2px ${theme.secondary}99;

  cursor: ${(props) => {
    if (props.loading) return "progress";
    return "pointer";
  }};
  display: grid;
  justify-content: center;

  padding: 7.5px 20px 7.5px 20px;
  line-height: normal;
  font-stretch: normal;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  transition-duration: 500ms;
  transition-property: all;
  transition-delay: 50ms;

  &:active {
    outline-style: none;
    outline-width: 0px;
  }

  &:focus {
    outline-style: none;
    outline-width: 0px;
  }

  &:hover {
    box-shadow: 0px 0px 5px ${theme.secondary}99;
  }

  p {
    ${theme.bold_18}
  }
`;