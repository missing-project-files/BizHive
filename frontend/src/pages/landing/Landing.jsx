import main_image from "../../assets/images/landing/logo.png";
import logo_header from "../../assets/images/landing/logo-black.png";
import "../../assets/styles/landing_styles/landing.css";
const Landing = () => {
  return (
    <main>
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
    </main>
  );
};
export default Landing;
