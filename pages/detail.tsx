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
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default Detail;
