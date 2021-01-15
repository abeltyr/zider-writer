
import AuthProvider from "../context/AuthContext/AuthProvider";
import { Global, css } from "@emotion/core";
import { theme } from "../styles/theme";
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Global
        styles={

          css`
        html {
            box-sizing: border-box;
            font-family: "Lora", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            scroll-behavior: smooth;
            /* user-select: none; */
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
            font-family: "Lora", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            outline: 0;
          }
          body {
            height: 100vh;
            width: 100vw;
            overflow-x: hidden;
            overflow-y: auto;
            margin: 0px;
            padding: 0px;
            background: ${theme.primary1};
            font-family: Lora;
            font-family: "Lora", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }  
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0px;
            line-height: 18px;
            font-family: "Lora", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          }
          a {
            text-decoration: none;
            color: #575a67;
          }
          .row {
            display: flex;
            align-items: center;
          }
          .link {
            color: ${theme.primary1};
          }
          /* Chrome, Safari, Edge, Opera */
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          /* Firefox */
          input[type="number"] {
            -moz-appearance: textfield;
          }       
        `}
      />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp;

