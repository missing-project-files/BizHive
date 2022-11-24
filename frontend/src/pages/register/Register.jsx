/* eslint-disable */
import { useState } from "react";
import logo from "../../assets/images/register/logo-no-background.svg";
import RegisterWrapper from "../../assets/wrappers/RegisterWrapper";
import FormRegister from "../../components/FormRegister"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true
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
        <FormRegister type="text"
                      name="name"
                      value={values.name}
                      handleChange={handleChange}
        />
        <button type="submit" className="btn-register">
          submit
        </button>
      </form>
    </RegisterWrapper>
  );
};

export default Register;
