import React from "react";
import FormLogin from "../../components/Form/FormLogin/FormLogin";
import { StyledLogin } from ".";
import Header from "../../components/Header/Header";

const Login = ({ setUser, setLoading }) => {
  return (
    <StyledLogin>
      <Header />
      <FormLogin setUser={setUser} setLoading={setLoading} />
    </StyledLogin>
  );
};

export default Login;
