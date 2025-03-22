import img from "../assets/logo/MUT-LOGO.jpeg";
import "./logo.css";

function Logo() {
  return (
    <>
      <div className="logo">
        <div className="image-wrapper">
          <img src={img} alt="" />
          <p className="inner-image-tagline">MUTC</p>
        </div>
        <div className="club-tagline">
          <h1 className="tagline">Murang'a University Tech Club (MUTC)</h1>
        </div>
      </div>
    </>
  );
}

export default Logo;
