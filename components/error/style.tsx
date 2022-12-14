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
    font-size: 1.6rem;
    strong {
      display: block;
      position: relative;
      width: 4rem;
      height: 4rem;
      margin: -2rem auto 1rem;
      text-indent: -9999rem;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 4rem;
        height: 4rem;
        background: url(./images/img_logo_g.png) no-repeat 50% 100% / 100% auto;
      }
    }
    p {
      line-height: 1.2;
      text-align: center;
    }
  }
`;
