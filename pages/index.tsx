import React, { useState, useEffect } from "react";
import Sample from "../components/sample/body";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataSet } from "../store";
import { getSubwayInfo } from "../api/api";
import dayjs from "dayjs";
const Index = () => {
  const [recoilItem, setRecoilItem] = useRecoilState(dataSet);
  const [testArr, setTestArr] = useState<any>();
  const subwayInfo = async () => {
    try {
      const subwayInfo = await getSubwayInfo();
      await console.log(subwayInfo.data.realtimeArrivalList);
    } catch (e) {
      console.log(`error남`, e);
    }
  };

  useEffect(() => {
    console.log("test");
    subwayInfo();
  }, []);

  return (
    <>
      <Sample />
    </>
  );
};

export default Index;
