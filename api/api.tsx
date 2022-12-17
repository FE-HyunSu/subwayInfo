import axios from "axios";
const swServiceKey = process.env.NEXT_PUBLIC_DATA_SEOUL_KEY;

export const getSubwayInfo = async (name: string) => {
  return await axios.get(
    `https://proxy.cors.sh/http://swopenAPI.seoul.go.kr/api/subway/${swServiceKey}/json/realtimeStationArrival/1/3/${encodeURIComponent(
      name
    )}`
  );
};
