import React, { useRef } from "react";
import Button from "./Button";

const UseImperativeHandleTutorial = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1>ImperativeHandle Tutorial</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandleTutorial;
