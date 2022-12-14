import React from "react";
import { ErrorBox } from "./style";

const Error = () => {
  return (
    <>
      <ErrorBox>
        <div>
          <p>
            에러가 발생했습니다.
            <br />
            잠시후에 시도해 주세요.
          </p>
        </div>
      </ErrorBox>
    </>
  );
};

export default Error;
