import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 60px;
  background: var(--color-star-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  font-family: Poppins;

  h1 {
    font-weight: 700;
    font-style: italic;
    color: var(--color-beau-blue);
  }

  div {
    display: flex;
    align-items: center;
    height: 100%;

    h3 {
      padding: 0 20px;
      color: var(--color-white);
    }
  }
`;

export const LogoutButton = styled(Button)`
  border-radius: 20px;
  background-color: var(--color-beau-blue);
  border: none;
  color: var(--color-star-blue);
`;
