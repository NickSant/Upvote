import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    padding: 16px;
    border-radius: 5px;
    margin: 5px 0;
    width: 100%;

    h3{
        font-family: Poppins;
        padding-top: 5px;
    }

    small{
        font-weight: 500;
        color: #999;
        font-size: 10px;
    }

    p{
        width: 100%;
        line-break: break;
        overflow-wrap: break-word;
        height: auto;
        padding: 10px 0;
    }
`;


export const OptionsContainer = styled.div`
    float: right;


    button{
        background: none;
        outline: none;
        border: none;
        padding: 8px;
        font-weight: 500;
        cursor: pointer;
        font-size: 14px;


        svg{
            margin: 0 3px;     
            font-size: 18px;
            animation: 0.5s normal pop;
        }
    }

    @keyframes pop {
    50% {
        transform: scale(1.3)
    }
    100% {
      transform: scale(1);
    }
  }
`;


