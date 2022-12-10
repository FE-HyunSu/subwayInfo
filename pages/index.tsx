import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataSet } from "../store";
import { getSubwayInfo } from "../api/api";
import dayjs from "dayjs";
import ButtonItem from "../components/buttonItem";
import subwayListData from "../data/subwayList.json";

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
      console.log(`error : `, e);
    }
  };

  return (
    <>
      {subwayListData &&
        subwayListData.map((item: any, idx: number) => (
          <ButtonItem
            key={idx}
            lineNumber={Number(item.lineNumber)}
            subwayName={item.subwayName}
            clickFunction={subwayInfo}
          />
        ))}
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
