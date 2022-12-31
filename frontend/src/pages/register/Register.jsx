import { useEffect, useState } from "react";
import logo from "../../assets/images/register/logo-no-background.svg";
import RegisterWrapper from "../../assets/wrappers/RegisterWrapper";
import FormRegister from "../../components/FormRegister";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../features/user/UserSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    console.log("INFO: email:%s, isMember:%s", email, isMember);

    if (isMember) {
      // noinspection JSCheckFunctionSignatures
      dispatch(loginUser({ email: email, password: password }));
    }
    if (!isMember) {
      // noinspection JSCheckFunctionSignatures
      dispatch(registerUser({ name, email, password }));
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  console.log("user: " + user);
  useEffect(() => {
    if (user) {
      console.log("user is there");
      setTimeout(() => {
        navigate("/Dashboard");
      }, 2000);
    }
  }, [user]);

  return (
    <RegisterWrapper className="full-register-page">
      <img src={logo} alt="register logo" className="logo-register" />
      <form className="form-register" onSubmit={onSubmit}>
        <h5>{values.isMember ? "Login" : "Register"}</h5>
        {!values.isMember && (
          <FormRegister
            type="name"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRegister
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRegister
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn-register" disabled={isLoading}>
          {isLoading ? "loading..." : values.isMember ? "Login" : "Register"}
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
