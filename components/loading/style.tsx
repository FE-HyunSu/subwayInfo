import styled, { keyframes } from "styled-components";

const loadingMotion = keyframes`
  0%{height:.1rem; opacity:1;}
  90%{height:4rem; opacity:1;}
  100%{height:4rem; opacity:0;}
`;

export const LoadingBox = styled.div`
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
    .loading {
      display: block;
      position: relative;
      width: 4rem;
      height: 4rem;
      margin: auto;
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
      &:after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        width: 4rem;
        height: 0.1rem;
        background: url(./images/img_logo_b.png) no-repeat 50% 100% / 100% auto;
        animation: ${loadingMotion} 2s infinite;
      }
    }
  }
`;
