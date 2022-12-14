import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerMode } from "../store";
import { getSubwayInfo, getStationFlow } from "../api/api";
import { useRouter } from "next/router";
import TrainInfo from "../components/trainInfo";
import Loading from "../components/loading";
import Error from "../components/error";

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

const Detail = () => {
  const router = useRouter();
  const [isHeaderMode, setHeaderMode] = useRecoilState(headerMode);
  const [responseInfo, setResponseInfo] = useState<subwayInfoType>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [stationName, setStationName] = useState<string | undefined>(
    decodeURIComponent(router.asPath?.split(`station=`)[1]?.split("&")[0])
  );
  const subwayInfo = async (name: string) => {
    try {
      const response = await getSubwayInfo(name);
      console.log(response);
      await console.log(response.data.realtimeArrivalList);
      await setResponseInfo(response.data.realtimeArrivalList);
    } catch (e: any) {
      console.log(`error : `, e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setHeaderMode("detail");
    if (stationName !== undefined) subwayInfo(stationName);
  }, [stationName, isError]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <>
          <Error />
        </>
      ) : (
        <>
          {responseInfo &&
            responseInfo.map((item: subwayInfoType, idx: number) => (
              <div key={idx}>
                <TrainInfo
                  line={2}
                  subwayName={item.statnNm}
                  msg1={item.arvlMsg2}
                  msg2={item.arvlMsg3}
                  updnLine={item.updnLine}
                  btrainNo={item.btrainNo}
                />
                {/* 대상 지하철 역 : 잠실
열차도착정보를 생성한 시각: 2022-12-13 22:59:28
첫번째도착메세지 (전역 진입, 전역 도착 등): 전역 출발
두번째도착메세지 (종합운동장 도착, 12분 후 (광명사거리) 등): 석촌
도착지방면(성수행 - 구로디지털단지방면): 암사행 - 몽촌토성방면
열차번호: 8276
상하행선구분(2호선 : (내선:0,외선:1),상행,하행): 상행
열차종류(급행,ITX) : */}
                <p>
                  도착지방면(성수행 - 구로디지털단지방면): {item.trainLineNm}
                </p>
                <p>열차종류(급행,ITX) : {item.btrainSttus}</p>
                <p>&nbsp;</p>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default Detail;
