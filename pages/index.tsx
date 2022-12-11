import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { headerMode } from "../store";
import { getSubwayInfo } from "../api/api";
import dayjs from "dayjs";
import ButtonItem from "../components/buttonItem";
import subwayListData from "../data/subwayList.json";
import SubwayList from "../components/subwayList";

interface subwayInfoType {
  map: any;
  statnNm?: string;
  recptnDt?: string;
  arvlMsg2?: string;
  arvlMsg3?: string;
  trainLineNm?: string;
  btrainNo?: string;
  updnLine?: string;
  btrainSttus?: string;
}

const Index = () => {
  const [isHeaderMode, setHeaderMode] = useRecoilState(headerMode);
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

  useEffect(() => {
    setHeaderMode("main");
  }, []);

  return (
    <>
      <SubwayList />
      {/* {subwayListData &&
        subwayListData.map((item: any, idx: number) => (
          <ButtonItem
            key={idx}
            lineNumber={Number(item.lineNumber)}
            subwayName={item.subwayName}
            clickFunction={subwayInfo}
          />
        ))} */}
      {responseInfo &&
        responseInfo.map((item: subwayInfoType, idx: number) => (
          <div key={idx}>
            <p>대상 지하철 역 : {item.statnNm}</p>
            <p>열차도착정보를 생성한 시각: {item.recptnDt}</p>
            <p>첫번째도착메세지 (전역 진입, 전역 도착 등): {item.arvlMsg2}</p>
            <p>
              두번째도착메세지 (종합운동장 도착, 12분 후 (광명사거리) 등):{" "}
              {item.arvlMsg3}
            </p>
            <p>도착지방면(성수행 - 구로디지털단지방면): {item.trainLineNm}</p>
            <p>열차번호: {item.btrainNo}</p>
            <p>
              상하행선구분(2호선 : (내선:0,외선:1),상행,하행): {item.updnLine}
            </p>
            <p>열차종류(급행,ITX) : {item.btrainSttus}</p>

            <p>&nbsp;</p>
          </div>
        ))}
    </>
  );
};

export default Index;
