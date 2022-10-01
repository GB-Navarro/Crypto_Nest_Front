import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        background-color: rgb(0,8,20);
        background-color: linear-gradient(180deg, rgba(0,8,20,0.95) 0%, rgba(0,8,20,1) 100%);
    }
`

export default GlobalStyles