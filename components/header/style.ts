import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
type Props = {
  height?: string;
};

export const HeaderContainer = styled.div<Props>`
  width: 100%;
  height: 55px;
  overflow: hidden;
  top: 0;
  z-index: 151;
  position: fixed;
  min-width: 300px;
  margin: 0px;
  background: ${theme.primary1};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 5px ${theme.shadow};
  color: ${theme.text};
  align-items: center;
  padding-left: 5%;
  .ImageLogo {
    border-radius: 5px;
    cursor: pointer;
  }
  .Verification {
    align-self: center;
  }
  .Separator {
    align-self: center;
    @media screen and (max-width: ${theme.mobileBreakPoint.M}) {
      margin-left: 7.5px;
    }
    @media screen and (max-width: ${theme.mobileBreakPoint.XSP}) {
      margin-left: 5px;
    }
  }
`;

export const TextLogo = styled.p`
  align-self: center;
  font-style: italic;
  font-weight: 900;
  font-size: 30px;
  color: ${theme.text};
  @media screen and (max-width: ${theme.mobileBreakPoint.M}) {
    font-size: 25px;
  }
  @media screen and (max-width: ${theme.mobileBreakPoint.XSP}) {
    font-size: 20px;
  }
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  .Text {
    margin-left: 10px;
    margin-right: 10px;
    text-transform: capitalize;
    letter-spacing: 0px;
    ${theme.bold_24}
    font-weight: 400;
  }
  @media screen and (max-width: ${theme.mobileBreakPoint.M}) {
    margin-left: 7.5px;
    .Text {
      margin-left: 15px;
      ${theme.bold_18}
    }
  }
  @media screen and (max-width: ${theme.mobileBreakPoint.XSP}) {
    margin-left: 7.5px;
    .Text {
      /* align-self: flex-end; */
      ${theme.bold_16}
    }
  }
`;
