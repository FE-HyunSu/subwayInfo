import React, { useState, useEffect } from "react";
import subwayListData from "../../data/subwayList.json";
import { SubwayBox, SubwayInfo } from "./style";

interface TrainInfoType {
  line: number | undefined;
  subwayName: string | undefined;
  msg1: string | undefined;
  msg2: string | undefined;
  updnLine: string | undefined;
  btrainNo: string | undefined;
}

const TrainInfo = ({
  line,
  subwayName,
  msg1,
  msg2,
  updnLine,
  btrainNo,
}: TrainInfoType) => {
  const [subwayList, setSubwayList] = useState<any>([]);
  const subwaySet = () => {
    subwayListData.forEach((item) => {
      if (subwayName === item.subwayName) {
        setSubwayList(item.lineInfo[0]);
      }
    });
  };
  return (
    <>
      <SubwayBox>
        <div className="inner">
          <strong>
            <span>{msg1}</span>
            <em>{btrainNo}</em>
          </strong>
          <ul>
            {subwayList &&
              subwayList.lineUp.map((item: any, idx: number) => {
                <li key={idx}>{item}</li>;
              })}
          </ul>
        </div>
      </SubwayBox>
      <SubwayInfo>
        <p>지금은 어디? : {msg2}</p>
        <p>방향 : {updnLine}</p>
      </SubwayInfo>
    </>
  );
};

export default TrainInfo;
