import { createGlobalStyle } from "styled-components";
// import RobotoWoff from "./fonts/roboto-condensed-v19-latin-regular.woff";

// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500&display=swap');
export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    `;
    
    // @font-face {
    //     font-family: 'Roboto Condensed';
    //     src: url(${RobotoWoff2}) format('woff2'),
    //         url(${RobotoWoff}) format('woff');
    // }