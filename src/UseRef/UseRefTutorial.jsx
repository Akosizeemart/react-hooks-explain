import React, { useRef } from "react";

const UseRefTutorial = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>React UseRef</h1>
      <input type="text" placeholder="Add your name" ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default UseRefTutorial;
