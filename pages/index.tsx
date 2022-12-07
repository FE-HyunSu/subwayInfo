import React, { useState, useEffect } from "react";
import Sample from "../components/sample/body";
import axios from "axios";

const Index = () => {
  const [dataList, setDataList] = useState<any>([]);
  const apiGet = async () => {
    try {
      let queryParams =
        "?" +
        encodeURIComponent("serviceKey") +
        "=" +
        process.env.NEXT_PUBLIC_SERVICE_KEY;
      queryParams +=
        "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
      queryParams +=
        "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10");
      queryParams +=
        "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON");
      queryParams +=
        "&" +
        encodeURIComponent("CURRENT_DATE") +
        "=" +
        encodeURIComponent("2019122010");
      queryParams +=
        "&" + encodeURIComponent("HOUR") + "=" + encodeURIComponent("24");
      queryParams +=
        "&" + encodeURIComponent("COURSE_ID") + "=" + encodeURIComponent("1");
      console.log(queryParams);
      const response = await axios.get(
        `http://apis.data.go.kr/1360000/TourStnInfoService/getTourStnVilageFcst${queryParams}`
      );
      console.log(response.data);
    } catch (e) {
      console.error(e);
      console.log("error");
    }
  };

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_SERVICE_KEY);
    apiGet();
  }, []);

  return (
    <>
      <Sample />
    </>
  );
};

export default Index;
