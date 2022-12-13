import React from "react";
import { SubwayBox } from "./style";

interface TrainInfoType {
  line: number | undefined;
  subWayName: string | undefined;
}

const TrainInfo = ({ line, subWayName }: TrainInfoType) => {
  return (
    <>
      <SubwayBox>
        <div className="inner">
          <strong>열차아이콘</strong>
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
