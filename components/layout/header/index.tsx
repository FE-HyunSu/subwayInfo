import { HeaderBox } from "./style";
import { useRecoilValue } from "recoil";
import { headerMode } from "../../../store";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const headerState = useRecoilValue(headerMode);
  return (
    <>
      <HeaderBox>
        {headerState && headerState === "detail" ? (
          <h1>
            <Link href="/">뒤로</Link>
            <strong>{router.query.station}역 실시간 도착 정보</strong>
          </h1>
        ) : (
          <h1>🚦 SUBWAY ARRIVAL INFORMATION.</h1>
        )}
      </HeaderBox>
    </>
  );
};
export default Header;
