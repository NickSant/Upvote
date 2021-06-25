import { Button, Input} from "antd";
import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1px solid whitesmoke;
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    color: var(--color-dark-blue);
    font-family: Poppins;
  }
`;

export const TextareaInput = styled(Input.TextArea)`
  width: 100%;
  height: 200px;
  min-height: 200px;
  max-height: 200px;
  padding: 10px;
  border-radius: 10px 10px 0 0;
`;

export const SubmitButton = styled(Button)`
  border-radius: 0 0 10px 10px;
  background: var(--color-star-blue);
  font-family: Poppins;
  float: right;
  color: white;
  margin: 10px 0;  
`;
