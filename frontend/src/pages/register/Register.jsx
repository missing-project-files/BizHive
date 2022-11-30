import { useState } from "react";
import logo from "../../assets/images/register/logo-no-background.svg";
import RegisterWrapper from "../../assets/wrappers/RegisterWrapper";
import FormRegister from "../../components/FormRegister";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../features/user/UserSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // eslint-disable-next-line no-unused-vars
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
    }
    if (!isMember) {
      dispatch(registerUser({ name, email, password }));
    }
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
          value={values.email}
          handleChange={handleChange}
        />
        <FormRegister
          type="text"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn-register" disabled={isLoading}>
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
