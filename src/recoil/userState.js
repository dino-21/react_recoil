import { atom } from "recoil";

export const userState = atom({
  key: "userState", // Recoil 상태의 고유 key
  default: { name: "kim", age: 20 }, // 초기값
});
