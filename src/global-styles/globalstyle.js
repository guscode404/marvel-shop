import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style-type: none;
        font-family: "Roboto", sans-serif;
        text-decoration: none;

        a {
            color: #000000;
        }
    }

    body {
        background-color: #0A0A0A;
        max-height: 200%;
        min-height: 100vh;
    }

    div#root {
        width: 100%;
        max-height: 200%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    button {
        cursor: pointer;
    }
`