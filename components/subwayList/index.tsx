import React from "react";
import ButtonItem from "../buttonItem";
import subwayListData from "../../data/subwayList.json";
import { SubwayListUI } from "./style";

const SubwayList = () => {
  return (
    <>
      <SubwayListUI>
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
