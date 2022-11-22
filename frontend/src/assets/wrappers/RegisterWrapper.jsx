import styled from "styled-components";

const RegisterWrapper = styled.section`
  display: grid;
  align-items: center;

  .logoRegister {
    display: block;
    margin: 0 auto 1.38rem;
  }

  .form-register {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
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
