import styled from "styled-components";

const Wrapper = styled.main`
  .landingLogo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  .landingContainerPage {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
    margin-left: calc(50% - 600px);
  }

  h1 {
    font-weight: 700;
    margin-left: 15%;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .landingInfo {
    max-width: 500px;
    color: black;
  }
  .landingMainImage {
    display: none;
  }
  @media (max-width: 389px) {
    .landingContainerPage {
      margin: auto;
      min-height: auto;
    }
    h1 {
      min-height: auto;
      font-size: 30px;
      span {
        display: none;
      }
    }
    p {
      display: none;
    }
    .landingLoginBtn {
      align-items: flex-start;
    }
  }
  @media (max-width: 247px) {
    .landingLoginBtn {
      font-size: 10px;
      line-height: 15px;
      text-transform: uppercase;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      margin-left: 0;
    }
    h1 {
      display: none;
    }
  }
  @media (max-width: 755px) and (min-width: 247px) {
    .landingContainerPage {
      margin: auto;
      min-height: auto;
    }
    h1 {
      min-height: auto;
      margin: auto;
      width: 100%;
      font-weight: 100;
      span {
        display: none;
      }
    }
    p {
      display: none;
    }
    .landingLoginBtn {
      margin-left: 12px;
      align-items: center;
    }
    h1 {
      font-weight: 700;
      span {
        color: var(--primary-500);
      }
    }
    .landingInfo {
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (max-width: 1199px) and (min-width: 755px) {
    .landingLoginBtn {
      margin-left: 31%;
      align-items: center;
    }
    .landingLogo {
      margin-top: 20px;
    }
    .landingContainerPage {
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      align-items: center;
    }
    .landingInfo {
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (min-width: 1200px) {
    .landingLoginBtn {
      margin-left: 30%;
      align-items: center;
    }
    .landingLogo {
      margin-top: 20px;
    }
    .landingContainerPage {
      grid-template-columns: 600px 1500px;
      column-gap: 3rem;
    }
    .landingMainImage {
      display: block;
    }
  }
`;
export default Wrapper;
