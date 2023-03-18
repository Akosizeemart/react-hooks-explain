import React, { useContext } from "react";
import { AppContext } from "./UseContextTutorial";

const Login = () => {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
