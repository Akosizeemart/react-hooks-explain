import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallBackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Zeemart Maxino long desc");

  // const returnComment = useCallback(name) => {
  //   return data + name;
  // }, [data] };
  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div>
      <h1>UseCallBack Tutorial</h1>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {""}
        Toggle
      </button>
      {!toggle && <p>Toggle</p>}
    </div>
  );
};

export default UseCallBackTutorial;
