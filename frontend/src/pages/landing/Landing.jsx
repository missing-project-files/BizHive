import main_image from "../../assets/images/landing/logo.png";
import logo_header from "../../assets/images/landing/logo-no-background.svg";
import "../../assets/styles/landing_styles/landing.css";
import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: red;
  }
  .landingContainerPage {
    display: grid;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    span {
      color: #4149f2;
    }
  }
  .landingLoginBtn {
    background: rgba(255, 255, 255, 0.2);
    color: #4149f2;
    cursor: pointer;
    padding: 0 3em;
    transition: all 0.3s;
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
