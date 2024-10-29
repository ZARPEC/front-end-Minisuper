import SignupMainTemplate from "./View/user/SignUp.html";

const Signup = () => {
  return <div dangerouslySetInnerHTML={{ __html: SignupMainTemplate }} />;
};

export default Signup;
