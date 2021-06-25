import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    h1, h2, h3, h4, h5, h5{
        margin: 0;
        
    }

    body, html{
        background-color: #f7f7f7;
    }

    :root{
        --color-white: #FFFFFF;
        --color-lavender: #E1E5F2;
        --color-beau-blue: #BFEBF6;
        --color-star-blue: #1481BA;
        --color-dark-blue: #022B3A;
    }
`;
