import { ButtonUI } from "./style";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { stationTarget } from "../../store";

interface ButtonItemType {
  lineNumber: number;
  subwayName: string;
}

const ButtonItem = ({ lineNumber, subwayName }: ButtonItemType) => {
  const router = useRouter();
  const [stationName, setStationName] = useRecoilState(stationTarget);
  const detailMove = () => {
    router.push(`/detail?station=${encodeURIComponent(subwayName)}`);
    setStationName(subwayName);
  };

  return (
    <>
      <ButtonUI onClick={() => detailMove()}>
        <span className={`line-` + lineNumber}>{lineNumber}</span>
        <strong>{subwayName}</strong>
      </ButtonUI>
    </>
  );
};
export default ButtonItem;
