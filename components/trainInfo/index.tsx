import React, { useState, useEffect } from "react";
import subwayListData from "../../data/subwayList.json";
import { TitleBox, SubwayBox } from "./style";

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
    console.log(subwayListData);
    subwayListData.forEach((item) => {
      if (subwayName === item.subwayName) {
        updnLine === "내선"
          ? setSubwayList(item.lineInfo[0].lineUp)
          : updnLine === "외선"
          ? setSubwayList(item.lineInfo[0].lineDown)
          : null;
      }
    });
  };
  useEffect(() => {
    subwaySet();
  }, []);
  return (
    <>
      <TitleBox>
        <div className="inner">
          <h1>
            {subwayName}역 - {updnLine}
          </h1>
          <p>현재 위치 : {msg2}</p>
        </div>
      </TitleBox>
      <SubwayBox className={updnLine === "내선" ? `align-right` : ``}>
        <div className="inner">
          <strong>
            <span>{msg1}</span>
            <em>{btrainNo}</em>
          </strong>
          <ul>
            {subwayList &&
              subwayList.map((item: any, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
          </ul>
        </div>
      </SubwayBox>
    </>
  );
};

export default TrainInfo;
