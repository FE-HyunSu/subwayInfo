import { atom } from "recoil";

export const dataSet = atom({
  key: "dataSet",
  default: [
    {
      apiId: "",
      apiPw: "",
    },
  ],
});

export const headerMode = atom({
  key: "headerMode",
  default: "main",
});
