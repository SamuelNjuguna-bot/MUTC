import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Leadership.css";
import image from "../assets/profiles/man1.jpeg";
import man2 from "../assets/profiles/man2.jpeg";
import man3 from "../assets/profiles/man3.jpeg";
import man4 from "../assets/profiles/man4.jpeg";
import man5 from "../assets/profiles/man5.jpeg";
import lady1 from "../assets/profiles/lady1.jpeg";
import lady5 from "../assets/profiles/lady5.jpeg";
import lady2 from "../assets/profiles/lady2.jpeg";
import lady3 from "../assets/profiles/lady3.jpeg";
import lady4 from "../assets/profiles/lady4.jpeg";
import man6 from "../assets/profiles/man6.jpeg";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Leadership() {
  const exerpt1 =
    "Dr. John Ndia is a seasoned educator and tech enthusiast dedicated to mentoring students in innovation and research. With years of experience, he guides MUTC towards excellence in technology.";
  const exerpt2 =
    "Victory Njeri is a visionary leader passionate about empowering students through technology. She ensures MUTC provides opportunities for hands-on learning, collaboration, and growth in the tech industry.";
  const exerpt3 =
    "Allan Muhari is an advocate for technological advancement, helping shape MUTC’s strategic direction. He supports members in gaining industry-relevant skills through mentorship and practical projects.";
  const exerpt4 =
    "Bridget Gitonga is a dedicated organizer ensuring seamless communication within MUTC. She plays a key role in coordinating events, keeping records, and fostering teamwork among members.";
  const exerpt5 =
    "Ruth Mutisya is responsible for managing MUTC’s finances efficiently. She ensures proper resource allocation, helping sustain club activities and support initiatives that benefit all members.";
  const exerpt6 =
    "Webster Ifedha is passionate about protecting digital assets. He leads cybersecurity initiatives in MUTC, educating members on ethical hacking, data protection, and online security best practices.";
  const exerpt7 =
    "Manase Gunga is a creative designer specializing in user-centered experiences. He leads UI/UX workshops at MUTC, teaching members how to create visually appealing and functional interfaces.";
  const exerpt8 =
    "Carolyne Githenduka is a skilled web developer dedicated to building modern web applications. She leads MUTC’s web development team, helping members master front-end and back-end technologies.";
  const exerpt9 =
    "Stanley Amunze is passionate about mobile technology and app development. He teaches MUTC members how to create innovative and user-friendly mobile applications for real-world use.";
  const exerpt10 =
    "Paul Karanja specializes in cloud computing and infrastructure management. He educates MUTC members on cloud technologies, helping them build scalable and secure cloud-based applications.";
  const exerpt11 =
    "Evyonn Mbithe is an expert in Microsoft’s Power Platform, enabling students to create low-code applications. She guides MUTC members in building automation solutions and business applications.";
  return (
    <>
      <Header />
      <div className="section-leadership-hero">
        <h1>Meet the Our team of leaders who keep this on going !!!</h1>
      </div>
      <section className="leaders">
        <Leaders name="Dr. John Ndia" url={image} biography={exerpt1} />
        <Leaders name="Victory Njeri" url={lady1} biography={exerpt2} />
        <Leaders name="Allan Muhari" url={man2} biography={exerpt3} />
        <Leaders name="Bridget Gitonga" url={lady2} biography={exerpt4} />
        <Leaders name="Ruth Mutisya" url={lady3} biography={exerpt5} />
        <Leaders name="Webster Ifedha" url={man3} biography={exerpt6} />
        <Leaders name="Manase Gunga " url={man4} biography={exerpt7} />
        <Leaders name="Carolyne Githenduka" url={lady4} biography={exerpt8} />
        <Leaders name="Stanley Amunze" url={man5} biography={exerpt9} />
        <Leaders name="Paul Karanja " url={man6} biography={exerpt10} />
        <Leaders name="Evyonn Mbithe " url={lady5} biography={exerpt11} />
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
