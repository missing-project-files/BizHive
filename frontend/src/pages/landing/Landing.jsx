import main_image from "../../assets/images/landing/logo.png";
import logo_header from "../../assets/images/landing/logo-no-background.svg";
import "../../assets/styles/landing_styles/landing.css";
import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    height: var(--nav-height);
    display: flex;
  }
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
    .landingContainerPage {
      grid-template-columns: 600px 1500px;
      column-gap: 3rem;
    }
    .landingMainImage {
      display: block;
    }
  }
`;

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img
          src={logo_header}
          alt="brett statistics logo"
          className="landingLogo"
        />
      </nav>
      <div className="landingContainerPage">
        {/* info */}
        <div className="landingInfo">
          <h1>
            Statistics
            <span> Analysis</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="landingLoginBtn">Login/Register</button>
        </div>
        <img
          src={main_image}
          alt="landing main image"
          className="landingMainImage"
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
