import  getData from "./api.js";

export function solution() {
    return getData();
  }

solution()
  .then(response => console.log(response));

