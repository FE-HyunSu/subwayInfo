import { HeaderBox } from "./style";
import { useRecoilValue } from "recoil";
import { headerMode } from "../../../store";

const Header = () => {
  const headerState = useRecoilValue(headerMode);
  return (
    <>
      <HeaderBox>
        {headerState && headerState === "main" ? (
          <h1>🚦 SUBWAY ARRIVAL INFORMATION.</h1>
        ) : (
          <h1>🚦 SUBWAY ARRIVAL INFORMATION. (sub)</h1>
        )}
      </HeaderBox>
    </>
  );
};
export default Header;
