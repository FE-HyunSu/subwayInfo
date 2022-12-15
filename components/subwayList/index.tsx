import React from "react";
import ButtonItem from "../buttonItem";
import subwayListData from "../../data/subwayList.json";
import { SubwayListUI } from "./style";

const SubwayList = () => {
  return (
    <>
      <SubwayListUI>
        <div className="info">
          <p>실시간 정보를 확인할 역을 선택해 주세요.</p>
        </div>
        <ul>
          {subwayListData &&
            subwayListData.map((item: any, idx: number) => (
              <li key={idx}>
                <ButtonItem
                  lineNumber={Number(item.lineNumber)}
                  subwayName={item.subwayName}
                />
              </li>
            ))}
        </ul>
      </SubwayListUI>
    </>
  );
};

export default SubwayList;
