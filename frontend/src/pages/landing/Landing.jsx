import logo from "../../assets/images/landing/logo.svg";
import main from "../../assets/images/landing/main.png";
const Landing = () => {
  return (
    <main>
      <nav>
        <img src={main} alt="brett statistics logo" className="landingLogo" />
      </nav>
      <div className="landingContainerPage">
        {/* info */}
        <div className="landingInfo">
          <img
            src={logo}
            alt="landing main image"
            className="landingMainImage"
          />
        </div>
      </div>
    </main>
  );
};
export default Landing;
