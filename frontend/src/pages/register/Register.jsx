/* eslint-disable */
import { useState } from "react";
import RegisterWrapper from "../../assets/wrappers/RegisterWrapper";
import logo from "../../assets/images/register/logo-no-background.svg"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <RegisterWrapper className="full-register-page">
      <nav>
        <img
          src={logo}
          alt="brett register logo"
          className="registerLogo"
        />
      </nav>
      <form className="form-register" onSubmit={onSubmit}></form>
    </RegisterWrapper>
  );
};

export default Register;
