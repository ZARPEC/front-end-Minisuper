import React, { useEffect, useState } from "react";
import LoginTemplate from "./View/user/login.html";
import { loginR } from "./Js/login.js";
const Login = () => {
  const loginUs = () => {
    loginR();
  };

  useEffect(() => {
    loginUs();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: LoginTemplate }} />;
};

export default Login;
