import React, { useState, useEffect } from "react";
import Sample from "../components/sample/body";
import axios from "axios";

const Index = () => {
  const [test, setTest] = useState<boolean>(false);
  return (
    <>
      <p>{test && test ? `true` : `false`}</p>
      <Sample />
    </>
  );
};

export default Index;
