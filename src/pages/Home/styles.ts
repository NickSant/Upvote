import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;

  overflow-x: hidden;
  overflow-y: scroll;

  @media(max-width: 599px){
    width: 100%;
    display: flex;
    flex-direction: column;
    
  }
`;

export const MainWrapper = styled.div`
  width: 600px;
  height: calc(100vh - 60px);
  margin-top: 60px;
  padding: 30px 10px;

  @media(max-width: 599px){
    width: 100%;
  }
`;
