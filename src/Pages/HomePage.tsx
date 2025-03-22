import Header from "../Components/Header";
import Footer from "../Components/Footer";
import heroImage from "../assets/hero-section/hero-section.jpg";
import "./Homepage.css";
function HomePage() {
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
      <Footer />
    </>
  );
}

export default HomePage;
