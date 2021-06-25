import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  width: 400px;
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Poppins;
    font-style: italic;
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 0;
    color: var(--color-star-blue);
  }

  form {
    width: 100%;


    small{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      margin-top: -10px;
      cursor: pointer;
      color: var(--color-star-blue);
      font-weight: 500;
    }
  }
`;

export const SubmitButton = styled(Button)`
  border-radius: 25px;
  width: 100%;
  font-family: Poppins;
  font-weight: 500;
  height: 40px;
  background-color: var(--color-star-blue);
  border-color: var(--color-star-blue);
`;
