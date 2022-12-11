import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerMode } from "../store";
import SubwayList from "../components/subwayList";

const Index = () => {
  const [isHeaderMode, setHeaderMode] = useRecoilState(headerMode);

  useEffect(() => {
    setHeaderMode("main");
  }, []);

  return (
    <>
      <SubwayList />
    </>
  );
};

export default Index;
