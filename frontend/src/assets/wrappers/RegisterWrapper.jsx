import styled from "styled-components";

const RegisterWrapper = styled.section`
  display: grid;
  align-items: center;

  .full-register-page {
    min-height: 100vh;
  }

  .logo-register {
    display: block;
    max-width: 120px;
    margin: 20px auto 250px;
  }

  .form-register {
    width: 90vw;
    max-width: 450px;
    border-top: 5px solid var(--primary-500);
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 15px 40px;
    margin: 0 auto;
    transition: var(--transition);
  }

  .form-row {
    margin-bottom: 20px;
  }
  .form-label {
    display: block;
    font-size: var(--smallText);
    margin-bottom: 20px;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  .form-input {
    width: 100%;
    padding: 12px 15px;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
    margin-bottom: 30px;
  }

  .btn-register,
  input[type="submit"] {
    width: 101%;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    padding: 12px 18px;
    font-size: 12px;
    line-height: 19px;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    letter-spacing: 3px;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .btn-register {
    border: solid 2px #fff;
    background-color: black;
    color: #fff !important;
  }
  .btn-register:hover {
    border: solid 2px #fff;
    background: #4149f2;
    color: white !important;
  }
  .btn-register:hover {
    color: #fff;
  }

  h3 {
    text-align: center;
    font-family: var(--bodyFont);
    font-weight: 700;
    font-size: 3.5vw;
  }

  p {
    margin: 1rem 0 0;
    text-align: center;
  }
`;
export default RegisterWrapper;
