import React, { useState, useEffect } from "react";
import Sample from "../components/sample/body";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataSet } from "../store";
import axios from "axios";
import dayjs from "dayjs";
const Index = () => {
  const [recoilItem, setRecoilItem] = useRecoilState(dataSet);
  const [testArr, setTestArr] = useState<any>();
  const serviceKey = process.env.NEXT_PUBLIC_DATA_GO_KR_KEY;
  const apiGet = async () => {
    try {
      const response = await axios.get(
        `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20221209&base_time=0600&nx=55&ny=127`
      );
      await setTestArr(response.data.response.body.items.item);
      await console.log(response.data.response.body.items.item);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
      <Sample />
      {console.log(testArr?.length)}
      {testArr &&
        testArr.length > 0 &&
        testArr.map((item: any, idx: any) => (
          <div key={idx}>{item.baseDate}</div>
        ))}
    </>
  );
};

export default Index;
