import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0 1rem;
  border: 0.1rem solid #eee;
  box-sizing: border-box;
  h1 {
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 1.4rem;
    color: #a1a1a1;
    a {
      display: inline-block;
      position: relative;
      width: 3rem;
      height: 3rem;
      text-indent: -9999rem;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 0.8rem;
        height: 0.8rem;
        margin: auto;
        border-bottom: 0.1rem solid #999;
        border-left: 0.1rem solid #999;
        text-indent: 0;
        transform: rotate(45deg);
      }
    }
    strong {
      font-weight: 400;
      color: #1a1a1a;
    }
  }
`;
