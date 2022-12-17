import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonUI = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.4rem;
  border-radius: 1rem;
  strong {
    display: flex;
    padding: 0.5rem;
    font-size: 1.2rem;
    color: #3a3a3a;
    transition: 0.2s;
    transform-origin: 0% 50%;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    font-weight: 700;
    font-size: 1.1rem;
    color: #fff;
    border-radius: 100%;
    transition: 0.2s;
    transform-origin: 100% 50%;
    cursor: pointer;
    &.line-2 {
      background-color: ${theme.color.line2};
    }
  }
  &:hover {
    strong {
      transform: scale(1.1);
    }
    span {
      transform: scale(1.1);
    }
  }
`;
