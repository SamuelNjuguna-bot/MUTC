import Header from "../Components/Header";
import Footer from "../Components/Footer";
import heroImage from "../assets/hero-section/hero-section.jpg";
import profile from "../assets/person1.jpg";
import profile2 from "../assets/person2.jpg";
import { FaRegStar } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import "./Homepage.css";
function HomePage() {
  const exerpt1 =
    "Murang'a University Tech Club (MUTC) is a dynamic community dedicated to fostering innovation, collaboration, and technological excellence. Our mission is to empower students with cutting-edge skills in programming, UI/UX design, machine learning, and beyond. Through hands-on workshops, mentorship, and collaborative projects, we cultivate a culture of continuous learning and problem-solving. At MUTC, we believe in harnessing technology to create impactful solutions, nurturing future tech leaders ready to shape the digital world. Join us and be part of the innovation!";
  const exerpt2 =
    "Being part of MUTC has been an incredible journey! The supportive community, hands-on coding sessions, and mentorship opportunities have helped me grow my confidence and skills in technology. From web development to machine learning, I’ve explored so many areas I never thought I would. MUTC has truly empowered me to chase my dreams in tech!";
  return (
    <>
      <Header />
      <div className="hero-section">
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Hero-image" />
          <h1 className="slogan">
            Empowering Innovators, Building Future Tech Leaders : Join MUTC and
            Transform Ideas into Reality!
          </h1>
        </div>
      </div>
      <div className="section-about-us">
        <div className="about-us-header">
          <h1>
            <span className="about-header">
              <span className="cap-A">A</span>bout{" "}
            </span>{" "}
            Us
          </h1>
        </div>
        <div className="about-us-excerpt">
          <p>
            Murang'a University Tech Club (MUTC) is a dynamic community
            dedicated to fostering innovation, collaboration, and technological
            excellence. Our mission is to empower students with cutting-edge
            skills in programming, UI/UX design, machine learning, and beyond.
            Through hands-on workshops, mentorship, and collaborative projects,
            we cultivate a culture of continuous learning and problem-solving.
            At MUTC, we believe in harnessing technology to create impactful
            solutions, nurturing future tech leaders ready to shape the digital
            world. Join us and be part of the innovation!
          </p>
        </div>
        <button className="about-btn">Explore</button>
      </div>
      <div className="testimonial-header ">
        <h1>
          <span className="about-header"> Testimonials </span>
        </h1>
      </div>
      <div className="testimonials">
        <div className="testimonial-container">
          <Testimonial
            name="Patric"
            exerpt={exerpt1}
            url={profile}
            rating={5}
          />
          <Testimonial
            name="Susan"
            exerpt={exerpt2}
            url={profile2}
            rating={4}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

interface myTestimonial {
  name: string;
  exerpt: string;
  url: string;
  rating: number;
}
function Testimonial({ name, exerpt, url, rating }: myTestimonial) {
  return (
    <div className="testimonial">
      <img src={url} alt="" />
      <p className="testimonial-Username">{name}</p>
      <p className="exerpt-text">
        <span className="speech-icon">
          <FaQuoteRight />
        </span>
        {exerpt}
        <span className="speech-icon">
          <FaQuoteRight />
        </span>
      </p>
      <p className="icons">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </p>
    </div>
  );
}

export default HomePage;
