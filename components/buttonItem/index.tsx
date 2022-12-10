import { ButtonUI } from "./style";

interface ButtonItemType {
  lineNumber: number;
  subwayName: string;
  clickFunction?: any;
}

const ButtonItem = ({
  lineNumber,
  subwayName,
  clickFunction,
}: ButtonItemType) => {
  return (
    <>
      <ButtonUI onClick={() => clickFunction(subwayName)}>
        <span className={`line-` + lineNumber}>{lineNumber}</span>
        <strong>{subwayName}</strong>
      </ButtonUI>
    </>
  );
};
export default ButtonItem;
