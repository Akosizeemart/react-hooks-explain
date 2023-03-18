import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffectTutorial = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <h1>UseLayoutEffect Tutorial</h1>
      <input ref={inputRef} value="Zeemart" />
    </div>
  );
};

export default UseLayoutEffectTutorial;
