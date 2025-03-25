import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Leadership.css";

import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import leadersDetails from "../Data/leadership";

function Leadership() {
  return (
    <>
      <Header />
      <div className="section-leadership-hero">
        <h1>Meet the Our team of leaders who keep this on going !!!</h1>
      </div>
      <section className="leaders">
        {leadersDetails.map((leader)=>{
          return <Leaders key={leader.id} name={leader.leadername} url={leader.imageUrl} biography={leader.leaderDetails} role={leader.role}/>
        })}
     

      </section>
      <Footer />
    </>
  );
}
interface myLeaders {
  url: string;
  name: string;
  biography: string;
  role?: string;
}
function Leaders({ url, name, biography, role }: myLeaders) {
  return (
    <div className="leaders-container">
      <div className="leader-image-wrapper">
        <img src={url} alt="" />
      </div>
      <div className="leadername">{name}</div>
      <div className="leaderrole">{role}</div>
      <div className="leader-biograghy">{biography}</div>
      <p className="leader-social-header">
        reach out to {name} via following platforms
      </p>
      <div className="leader-socials">
        <Link to={""} className="leader-socials-icons">
          {" "}
          <FaLinkedin />
        </Link>
        <Link to={""} className="leader-socials-icons">
          <IoLogoInstagram />
        </Link>
        <Link to={""} className="leader-socials-icons">
          <FaXTwitter />{" "}
        </Link>
        <Link to={""} className="leader-socials-icons">
          <FaFacebook />{" "}
        </Link>
      </div>
    </div>
  );
}
export default Leadership;
