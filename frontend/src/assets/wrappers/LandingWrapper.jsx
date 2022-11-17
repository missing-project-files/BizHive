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
      font-size: 1.052rem;
      span {
        display: none;
      }
    }
    p {
      display: none;
    }
    .landingLoginBtn {
      margin-left: 0;
      margin-top: 0;
      margin-right: 0;
      align-items: flex-start;
    }
  }
  @media (max-width: 247px) {
    .landingLoginBtn {
      margin: -20%;
      padding: 3px 8px;
      font-size: 10px;
      line-height: 25px;
      text-transform: uppercase;
      font-family: "Montserrat", sans-serif;
      font-weight: 200;
    }
    h1 {
      margin-left: -5px;
    }
  }
  @media (max-width: 755px) and (min-width: 389px) {
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
      margin: 5%;
      align-items: center;
    }
  }
  @media (max-width: 1199px) {
    .landingContainerPage {
      margin-left: auto;
      margin-right: auto;
      width: 50%;
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
  @media (min-width: 1200px) {
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
