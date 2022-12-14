import React from "react";
import { LoadingBox } from "./style";

const Loading = () => {
  return (
    <>
      <LoadingBox>
        <div>
          <strong className="loading">loading..</strong>
        </div>
      </LoadingBox>
    </>
  );
};

export default Loading;
