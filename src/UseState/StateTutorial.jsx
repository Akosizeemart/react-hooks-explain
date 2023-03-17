import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Zeemart");

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
