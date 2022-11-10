import main_image from "../../assets/images/landing/logo.png";
import logo_header from "../../assets/images/landing/logo-no-background.svg";
import "../../assets/styles/landing_styles/landing.css";
import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    margin-left: 450px;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    min-width: 2500px;
  }

  .landingContainerPage {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
    margin-left: calc(50% - 700px);
  }

  h1 {
    font-weight: 700;
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
  @media (min-width: 1420px) {
    .landingContainerPage {
      grid-template-columns: 650px 1800px;
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
