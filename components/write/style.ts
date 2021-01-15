import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const Title = styled.div<EditedData>`
  margin: 0px;
  text-align: ${(props) => props.textAlign || "left"};
  margin-left: ${(props) => `${props.marginLeft}px` || "0px"};
  color: ${(props) => props.color || theme.text};
  cursor: text;
  ${theme.bold_32}
  /* text-transform: uppercase; */
  word-break: break-word;
  height: 100%;
  padding: 0px;
  :empty::before {
    content: attr(placeholder);
    color: #888;
  }

  :empty:focus::before {
    content: "";
  }
`;
interface EditedData {
  textAlign: string | null;
  color: string | null;
  marginLeft?: number | null;
}

interface EditedDataContainer {
  marginLeft: number | null;
}

export const Text = styled.div<EditedData>`
  margin: 0px;
  text-align: ${(props) => props.textAlign || "left"};
  margin-left: ${(props) => `${props.marginLeft}px` || "0px"};
  color: ${(props) => props.color || theme.text};
  cursor: text;
  ${theme.medium_18}
  word-break: break-word;
  white-space: pre-wrap;
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  :empty::before {
    content: attr(placeholder);
    color: #888;
  }

  :empty:focus::before {
    content: "";
  }
`;

export const Empty = styled.div<EditedData>`
  margin: 0px;
  text-align: ${(props) => props.textAlign || "left"};
  margin-left: ${(props) => `${props.marginLeft}px` || "0px"};
  color: ${(props) => props.color || theme.text};
  cursor: text;
  ${theme.medium_16}
  word-break: break-word;
  :empty::before {
    content: attr(placeholder);
    color: #888;
  }

  :empty:focus::before {
    content: "";
  }
`;

export const Header = styled.h2<EditedData>`
  margin: 0px;
  text-align: ${(props) => props.textAlign || "left"};
  margin-left: ${(props) => `${props.marginLeft}px` || "0px"};
  color: ${(props) => props.color || theme.text};
  cursor: text;
  font-weight: bold;
  line-height: 34px;
  word-break: break-word;
  :empty::before {
    content: attr(placeholder);
    color: #888;
  }

  :empty:focus::before {
    content: "";
  }
`;

export const Header2 = styled.h3<EditedData>`
  margin: 0px;
  text-align: ${(props) => props.textAlign || "left"};
  margin-left: ${(props) => `${props.marginLeft}px` || "0px"};
  color: ${(props) => props.color || theme.text};
  cursor: text;
  font-weight: bold;
  line-height: 28px;
  word-break: break-word;
  :empty::before {
    content: attr(placeholder);
    color: #888;
  }

  :empty:focus::before {
    content: "";
  }
`;
export const CommentBox = styled.div<EditedDataContainer>`
  display: flex;
  margin-left: ${(props) => `${props.marginLeft}px` || "0px"};
  .leftBox {
    border: 4px solid ${theme.secondary1};
    border-radius: 20px;
    margin-right: 10px;
  }
  .RightBox {
    width: 100%;
    display: grid;
    grid-gap: 10px;
  }
`;

export const CommentBoxText = styled.div<EditedData>`
  margin: 0px;
  text-align: ${(props) => props.textAlign || "left"};
  color: ${(props) => props.color || theme.text};
  width: 100%;
  cursor: text;
  text-align: left;
  ${theme.medium_16}
  word-break: break-word;
  :empty::before {
    content: attr(placeholder);
    color: #888;
  }

  :empty:focus::before {
    content: "";
  }
`;

export const Box = styled.div<EditedDataContainer>`
  display: grid;
  grid-gap: 15px;
  border: 1px solid ${theme.secondary1};
  margin-left: ${(props) => `${props.marginLeft}px` || "0px"};
  padding: 8px;
  border-radius: 5px;
`;

export const BoxText = styled.div<EditedData>`
  margin: 0px;
  text-align: ${(props) => props.textAlign || "left"};
  color: ${(props) => props.color || theme.text};
  cursor: text;
  ${theme.medium_14}
  line-height: 1.50001;
  font-variant-ligatures: none;
  white-space: pre;
  white-space: pre-wrap;

  font-weight: 200;
  word-break: break-word;
  :empty::before {
    content: attr(placeholder);
    color: #888;
  }

  :empty:focus::before {
    content: "";
  }
`;

export const ImageContainer = styled.img``;

export const ImageFields = styled.div`
  width: 100%;
  display: grid;
  justify-content: flex-start;
  border-radius: 9px;
  color: ${theme.primary1};
  text-align: center;
  .Upload {
    background: ${theme.primary5}99;
    border-radius: 9px;
    color: ${theme.text};
    height: 200px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    justify-items: center;
    grid-template-rows: 1fr 0.1fr;
    p {
      ${theme.bold_18}
    }
    .Upper {
      width: 300px;
      padding-top: 20px;
      padding-bottom: 20px;
      cursor: pointer;
      justify-self: center;
      display: grid;
      justify-items: center;
      grid-gap: 5px;
      align-self: center;
      opacity: 0.75;
      :hover {
        opacity: 1;
      }
    }
    .Lower {
      align-self: flex-end;
      margin-bottom: 10px;
    }
    .Url {
      cursor: pointer;
      ${theme.medium_12}
    }
  }
  .ButtonContainer {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  input {
    width: 100%;
    height: 30px;
    border-top: 1px;
    border-left: 1px;
    border-right: 1px;
    ${theme.bold_16};
    color: ${theme.text};
    background: transparent;
  }
`;

export const Dot = styled.div<EditedDataContainer>`
  display: flex;
  align-items: center;
  margin-left: ${(props) => `${props.marginLeft}px` || "0px"};
  .leftBox {
    height: 8px;
    width: 8px;
    background: ${theme.text};
    border-radius: 20px;
    margin-right: 10px;
  }
  .RightBox {
    width: 100%;
    display: grid;
    grid-gap: 10px;
  }
`;

export const DotText = styled.div<EditedData>`
  margin: 0px;
  text-align: ${(props) => props.textAlign || "left"};
  color: ${(props) => props.color || theme.text};
  width: 100%;
  cursor: text;
  text-align: left;
  ${theme.medium_16}
  word-break: break-word;
  :empty::before {
    content: attr(placeholder);
    color: #888;
  }

  :empty:focus::before {
    content: "";
  }
`;
