import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const globalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Oswald:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC&display=swap');
    ${normalize};

    * {
        margin: 0;
        padding: 0;
        border: 0;
        animation-duration: 300ms;
    }
    a {
        text-decoration: none;
    }
    a, strong, span, h2 {
        color: inherit;
    }
    ul, li {
        list-style: none;
    }
    header {
        font-size: 1rem;
        font-weight: 600;
        font-style: inherit;
    }
    
    nav, header, footer {
        font-family: 'Alegreya Sans SC', sans-serif;
    }

    ul, li > a {
      font-family: "Oswald", sans-serif;
    }
    
    html, body {
        height: 100%;
    }

    body {
        position: relative;
        font-size: 1rem;
        font-weight: 400;
        height: 100%;
        font-family: 'Lato', sans-serif;
        text-align: center;
        background-color: ${(props) => props.theme.color.white};
        margin: 0 auto;
        border-radius: 4px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
        margin: 0 auto;
    }

    button, form, input {
        background:none;
        border: none;
        outline: none;
    }
`;

export default globalStyles;
