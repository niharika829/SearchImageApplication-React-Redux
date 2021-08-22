import React from "react";

const Demo = () => {
  const arr1 = [1, 1, 2, 2, 3, 3];
  const arr2 = [9, 9, 3, 3, 5, 6, 7, 4];
  const mergeArray = (arr1, arr2) => {
    const finalArr = [...new Set(arr1.concat(arr2))];
    console.log(
      finalArr.sort((x, y) => {
        return x - y;
      })
    );
  };
  return <div onClick={() => mergeArray(arr1, arr2)}>hello</div>;
};

export default Demo;
