import styled from "styled-components";

export const ButtonUI = styled.button`
  display: flex;
  padding: 1.4rem 2rem;
  border: 0.1rem solid #eee;
  border-radius: 1rem;
  strong {
    display: flex;
    padding: 0.5rem;
    font-size: 1.4rem;
    color: #3a3a3a;
    transition: 0.2s;
    transform-origin: 0% 50%;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.4rem;
    height: 2.4rem;
    font-weight: 700;
    font-size: 1.3rem;
    color: #fff;
    border-radius: 100%;
    transition: 0.2s;
    transform-origin: 100% 50%;
    &.line-2 {
      background-color: #3e8747;
    }
  }
  &:focus {
    border: 0.1rem solid #eee;
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
