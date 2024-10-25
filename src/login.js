import LoginTemplate from "./View/user/login.html";

const Login = () => {
  return <div dangerouslySetInnerHTML={{ __html: LoginTemplate }} />;
};

export default Login;
