import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SubwayListUI = styled.div`
  width: 100%;
  .info {
    display: block;
    background-color: #eee;
    p {
      padding: 1.2rem 2rem;
      font-size: 1.2rem;
      color: #999;
    }
  }
  ul {
    width: 100%;
    padding: 1rem;
    li {
      display: inline-block;
      margin: 0.5rem;
      border: 0.2rem solid ${theme.color.line2};
      border-radius: 6rem;
    }
  }
`;
