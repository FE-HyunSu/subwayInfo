import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SubwayBox = styled.div`
  display: block;
  position: relative;
  .inner {
    display: block;
    position: relative;
    width: 95%;
    max-width: 102.4rem;
    margin: auto;
    strong {
      position: absolute;
      top: 4rem;
      width: 5rem;
      height: 2rem;
      border: 0.2rem solid ${theme.color.line2};
      border-radius: 0.6rem;
      z-index: 5;
    }
    ul {
      display: flex;
      position: relative;
      width: 100%;
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
