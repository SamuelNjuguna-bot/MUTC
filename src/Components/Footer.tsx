import "./footer.css";
import Logo from "./logo";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer-details">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="contact-icons">
          <Link to={""} className="Link">
            +254-798 959 217{" "}
          </Link>
          <Link to={"#"} className="Link">
            <FaLinkedin /> LinkedIn
          </Link>
          <Link to={"#"} className="Link">
            <IoLogoInstagram /> Instagram
          </Link>
          <Link to={"#"} className="Link">
            <FaXTwitter /> Twitter
          </Link>
          <Link to={"#"} className="Link">
            <FaFacebook /> FaceBook
          </Link>
        </div>

        <div className="pageLinks">
          <Link to={"/"} className="Link">
            Back To Top
          </Link>
          <Link to={"leadership"} className="Link">
            Leadership
          </Link>
          <Link to={"tracks"} className="Link">
            Tracks
          </Link>
          <Link to={"events"} className="Link">
            Events
          </Link>
          <Link to={"/"} className="Link">
            About Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Footer;
