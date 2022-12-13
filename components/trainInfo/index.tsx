import React from "react";
import { SubwayBox, SubwayInfo } from "./style";

interface TrainInfoType {
  line: number | undefined;
  subWayName: string | undefined;
  msg1: string | undefined;
  msg2: string | undefined;
  updnLine: string | undefined;
}

const TrainInfo = ({
  line,
  subWayName,
  msg1,
  msg2,
  updnLine,
}: TrainInfoType) => {
  return (
    <>
      <SubwayBox>
        <div className="inner">
          <strong>
            <span>{msg1}</span>
          </strong>
          <ul>
            <li>{subWayName + `역`}</li>
            <li>{subWayName + ` 전 역`}</li>
            <li>{subWayName + ` 전전 역`}</li>
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
