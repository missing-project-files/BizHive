import { useState } from "react";
import logo from "../../assets/images/register/logo-no-background.svg";
import RegisterWrapper from "../../assets/wrappers/RegisterWrapper";
import FormRegister from "../../components/FormRegister";

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

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <RegisterWrapper className="full-register-page">
      <img src={logo} alt="register logo" className="logo-register" />
      <form className="form-register" onSubmit={onSubmit}>
        <h5>{values.isMember ? "Login" : "Register"}</h5>
        {!values.isMember && (
          <FormRegister
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRegister
          type="text"
          name="email"
          value={values.name}
          handleChange={handleChange}
        />
        <FormRegister
          type="text"
          name="password"
          value={values.name}
          handleChange={handleChange}
        />
        <button type="submit" className="btn-register">
          {values.isMember ? "Login" : "Register"}
        </button>
        <p>
          {values.isMember ? "Or use quick" : "Already registered?"}
          <button
            type="button"
            onClick={toggleMember}
            className="btn-choose-register"
          >
            {values.isMember ? "#Register" : "#Log in"}
          </button>
        </p>
      </form>
    </RegisterWrapper>
  );
};

export default Register;
