import axios from "axios";
const swServiceKey = process.env.NEXT_PUBLIC_DATA_SEOUL_KEY;
const dataServiceKey = process.env.NEXT_PUBLIC_DATA_GO_KR_KEY;

export const getSubwayInfo = async (name: string) => {
  return await axios.get(
    `https://proxy.cors.sh/http://swopenAPI.seoul.go.kr/api/subway/${swServiceKey}/json/realtimeStationArrival/1/3/${encodeURIComponent(
      name
    )}`
  );
};

export const getWeatherInfo = async () => {
  return await axios.get(
    `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${dataServiceKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20221209&base_time=0600&nx=55&ny=127`
  );
};

export const getStationFlow = async () => {
  return await axios.get(
    `http://apis.data.go.kr/B553766/smt-path/path?serviceKey=${dataServiceKey}&pageNo=1&numOfRows=10&dept_station_code=2728&dest_station_code=2014&week=DAY&search_type=FASTEST`
  );
};
