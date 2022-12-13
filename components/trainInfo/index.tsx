import React from "react";
import { SubwayBox } from "./style";

interface TrainInfoType {
  line: number | undefined;
  subWayName: string | undefined;
  msg1: string | undefined;
  msg2: string | undefined;
}

const TrainInfo = ({ line, subWayName, msg1, msg2 }: TrainInfoType) => {
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
    </>
  );
};

export default TrainInfo;
