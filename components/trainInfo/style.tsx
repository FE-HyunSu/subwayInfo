import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const trainMotion = keyframes`
  0%{transform:scale(1,1) translateY(0);}
  33%{transform:scale(1,1) translateY(-.3rem);}
  66%{transform:scale(1,1.1) translateY(0);}
  100%{transform:scale(1,1) translateY(0);}
`;

export const TitleBox = styled.div`
  .inner {
    display: block;
    position: relative;
    width: calc(100% - 4rem);
    max-width: 102.4rem;
    margin: auto;
    h1 {
      padding-top: 2rem;
      font-weight: 400;
      font-size: 1.6rem;
    }
  }
`;

export const SubwayBox = styled.div`
  display: block;
  position: relative;
  border-bottom: 0.1rem solid #eee;
  .inner {
    display: block;
    position: relative;
    width: calc(100% - 4rem);
    max-width: 102.4rem;
    margin: auto;
    strong {
      position: absolute;
      top: 4rem;
      width: 5rem;
      height: 2rem;
      z-index: 5;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0.2rem solid ${theme.color.line2};
        border-radius: 0.4rem;
        animation: ${trainMotion} 1s infinite;
      }
      span {
        position: absolute;
        top: -1.4rem;
        left: 0;
        width: 10rem;
        font-size: 1.1rem;
      }
      em {
        position: absolute;
        right: 0.2rem;
        bottom: 0.2rem;
        font-weight: 700;
        font-size: 1rem;
        color: ${theme.color.line2};
        animation: ${trainMotion} 1s infinite;
      }
    }
    ul {
      display: flex;
      position: relative;
      width: 100%;
      min-height: 12rem;
      &:before {
        content: "";
        position: absolute;
        top: 7rem;
        right: 0;
        left: 0;
        width: 100%;
        height: 0.2rem;
        background-color: ${theme.color.line2};
      }
      li {
        position: relative;
        flex: 1 auto;
        padding-top: 8rem;
        font-weight: 400;
        font-size: 1.4rem;
        text-align: left;
        &:after {
          content: "";
          position: absolute;
          top: 6.6rem;
          left: 0;
          width: 1rem;
          height: 1rem;
          background-color: ${theme.color.line2};
          border-radius: 100%;
        }
      }
    }
  }
`;
