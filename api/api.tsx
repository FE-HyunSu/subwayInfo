import axios from "axios";
const swServiceKey = process.env.NEXT_PUBLIC_DATA_SEOUL_KEY;
const dataServiceKey = process.env.NEXT_PUBLIC_DATA_GO_KR_KEY;

export const getSubwayInfo = async () => {
  return await axios.get(
    `http://swopenAPI.seoul.go.kr/api/subway/${swServiceKey}/json/realtimeStationArrival/0/5/서울`
  );
};

export const getWeatherInfo = async () => {
  return await axios.get(
    `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${dataServiceKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20221209&base_time=0600&nx=55&ny=127`
  );
};
