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
        <img
          src={logo}
          alt="register logo"
          className="logo-register"
        />
      <form className="form-register" onSubmit={onSubmit}>
      <h3>Login</h3>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
      </div>
      </form>
    </RegisterWrapper>
  );
};

export default Register;
