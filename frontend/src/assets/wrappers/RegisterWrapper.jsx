import styled from "styled-components";

const RegisterWrapper = styled.section`
  display: grid;
  align-items: center;

  .full-register-page {
    min-height: 100vh;
  }

  .logo-register {
    display: block;
    width: 5.311%;
    margin: 20px auto 1.38rem;
  }

  .form-register {
    width: 90vw;
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: var(--transition);
  }

  .form-row {
    margin-bottom: 1rem;
  }

  .form-label {
    display: block;
    font-size: var(--smallText);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  h3 {
    text-align: center;
  }

  p {
    margin: 1rem 0 0;
    text-align: center;
  }
`;
export default RegisterWrapper;
