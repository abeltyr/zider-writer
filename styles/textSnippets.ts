import { css, SerializedStyles } from "@emotion/core";

type TextSnippets = {
  medium_10: SerializedStyles;
  medium_12: SerializedStyles;
  medium_14: SerializedStyles;
  medium_16: SerializedStyles;
  medium_18: SerializedStyles;
  medium_24: SerializedStyles;
  bold_12: SerializedStyles;
  bold_14: SerializedStyles;
  bold_16: SerializedStyles;
  bold_18: SerializedStyles;
  bold_24: SerializedStyles;
  bold_32: SerializedStyles;
  bold_36: SerializedStyles;
  bold_48: SerializedStyles;
  italic_bold_32: SerializedStyles;
};

const textSnippets: TextSnippets = {
  medium_10: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 10px;
    line-height: 14px;
  `,
  medium_12: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
  `,
  medium_14: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
  `,
  medium_16: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
  `,
  medium_18: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  `,
  medium_24: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
  `,
  bold_12: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 21px;
  `,
  bold_14: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 23px;
  `,
  bold_16: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
  `,
  bold_18: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
  `,
  bold_24: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
  `,
  bold_32: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
  `,
  bold_36: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
  `,
  bold_48: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 57px;
  `,
  italic_bold_32: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
  `,
} as const;

export { textSnippets };
