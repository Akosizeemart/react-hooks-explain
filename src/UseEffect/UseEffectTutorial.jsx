import React, { useState, useEffect } from "react";

const UseEffectTutorial = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        console.log("api was called");
      });
  }, [count]);

  return (
    <div>
      <ul>
        {data.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
      {count}
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  );
};

export default UseEffectTutorial;
