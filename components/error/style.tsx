import styled from "styled-components";

export const ErrorBox = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.8rem;
  }
`;
