import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataSet } from "../store";
import { getSubwayInfo } from "../api/api";
import dayjs from "dayjs";
import ButtonItem from "../components/buttonItem";

interface subwayInfoType {
  map: any;
  recptnDt?: string;
  arvlMsg2?: string;
  arvlMsg3?: string;
  trainLineNm?: string;
  btrainNo?: string;
  updnLine?: string;
}

const Index = () => {
  const [recoilItem, setRecoilItem] = useRecoilState(dataSet);
  const [testArr, setTestArr] = useState<any>();
  const [responseInfo, setResponseInfo] = useState<subwayInfoType>();
  const subwayInfo = async (name: string) => {
    try {
      const response = await getSubwayInfo(name);
      await console.log(response.data.realtimeArrivalList);
      await setResponseInfo(response.data.realtimeArrivalList);
    } catch (e) {
      console.log(`error남`, e);
    }
  };

  return (
    <>
      <ButtonItem
        lineNumber={Number(2)}
        subwayName={`삼성`}
        clickFunction={subwayInfo}
      />
      <ButtonItem
        lineNumber={Number(2)}
        subwayName={`잠실`}
        clickFunction={subwayInfo}
      />
      <ButtonItem
        lineNumber={Number(2)}
        subwayName={`구로디지털단지`}
        clickFunction={subwayInfo}
      />
      {responseInfo &&
        responseInfo.map((item: subwayInfoType, idx: number) => (
          <div key={idx}>
            <p>recptnDt: {item.recptnDt}</p>
            <p>arvlMsg2: {item.arvlMsg2}</p>
            <p>arvlMsg3: {item.arvlMsg3}</p>
            <p>trainLineNm: {item.trainLineNm}</p>
            <p>btrainNo: {item.btrainNo}</p>
            <p>updnLine: {item.updnLine}</p>
            <p>&nbsp;</p>
          </div>
        ))}
    </>
  );
};

export default Index;
