import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cyber from "../assets/tracks/track-cyber.jpeg";
import Cloud from "../assets/tracks/cloud.jpeg";
import webdesign from "../assets/tracks/web-design.jpeg";
import mobile from "../assets/tracks/mobile-app.jpeg";
import powerbi from "../assets/tracks/powerbi.jpeg";
import uiUx from "../assets/tracks/ui-ux.jpeg";
// import tracksExerpts from "../Data/TracksExerpts";
import "./tracks.css";
function Tracks() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="tracks-hero-section">
        <h1 className="tracks-hero-header">
          Our Club is dedicated in Instructing Our Members to the finest
          details.Check Out some Of the tracs we offer
        </h1>
      </div>
      <div className="tracks-section">
        <TracksContainer
          track="Mobile App"
          trackExerpt="Dive into the world of cybersecurity and learn how to protect systemsnetworks, and data from cyber threats. Our program covers securityprotocols, ethical hacking, encryption techniques, and threat analysis Engage in hands-on projects and real-world scenarios where you will identify vulnerabilities and implement security solutions"
          trackWhatToExpect="By the end of this track, you will have the skills to safeguard digital environments, conduct security audits, and implement robustsecurity measures. You’ll be prepared to tackle real-world cybersecurity challenges and help defend against cyber attacks."
          trackImageUrl={mobile}
        />
        <TracksContainer
          track="PowerBI"
          trackExerpt="Dive into the world of cybersecurity and learn how to protect systemsnetworks, and data from cyber threats. Our program covers securityprotocols, ethical hacking, encryption techniques, and threat analysis Engage in hands-on projects and real-world scenarios where you will identify vulnerabilities and implement security solutions"
          trackWhatToExpect="By the end of this track, you will have the skills to safeguard digital environments, conduct security audits, and implement robustsecurity measures. You’ll be prepared to tackle real-world cybersecurity challenges and help defend against cyber attacks."
          trackImageUrl={powerbi}
        />
        <TracksContainer
          track="Web Development"
          trackExerpt="Dive into the world of cybersecurity and learn how to protect systemsnetworks, and data from cyber threats. Our program covers securityprotocols, ethical hacking, encryption techniques, and threat analysis Engage in hands-on projects and real-world scenarios where you will identify vulnerabilities and implement security solutions"
          trackWhatToExpect="By the end of this track, you will have the skills to safeguard digital environments, conduct security audits, and implement robustsecurity measures. You’ll be prepared to tackle real-world cybersecurity challenges and help defend against cyber attacks."
          trackImageUrl={uiUx}
        />

        <TracksContainer
          track="UI/UX Design"
          trackExerpt="Dive into the world of cybersecurity and learn how to protect systemsnetworks, and data from cyber threats. Our program covers securityprotocols, ethical hacking, encryption techniques, and threat analysis Engage in hands-on projects and real-world scenarios where you will identify vulnerabilities and implement security solutions"
          trackWhatToExpect="By the end of this track, you will have the skills to safeguard digital environments, conduct security audits, and implement robustsecurity measures. You’ll be prepared to tackle real-world cybersecurity challenges and help defend against cyber attacks."
          trackImageUrl={webdesign}
        />
        <TracksContainer
          track="Cyber Security"
          trackExerpt="Dive into the world of cybersecurity and learn how to protect systemsnetworks, and data from cyber threats. Our program covers securityprotocols, ethical hacking, encryption techniques, and threat analysis Engage in hands-on projects and real-world scenarios where you will identify vulnerabilities and implement security solutions"
          trackWhatToExpect="By the end of this track, you will have the skills to safeguard digital environments, conduct security audits, and implement robustsecurity measures. You’ll be prepared to tackle real-world cybersecurity challenges and help defend against cyber attacks."
          trackImageUrl={Cyber}
        />

        <TracksContainer
          track="Cloud Engineering"
          trackExerpt="Dive into the world of cybersecurity and learn how to protect systemsnetworks, and data from cyber threats. Our program covers securityprotocols, ethical hacking, encryption techniques, and threat analysis Engage in hands-on projects and real-world scenarios where you will identify vulnerabilities and implement security solutions"
          trackWhatToExpect="By the end of this track, you will have the skills to safeguard digital environments, conduct security audits, and implement robustsecurity measures. You’ll be prepared to tackle real-world cybersecurity challenges and help defend against cyber attacks."
          trackImageUrl={Cloud}
        />
      </div>
      <div className="subscribe-part">
        <div className="subscribe-header">
          <h1>Subscribe</h1>
        </div>
        <form action="">
          <input type="text" className="Input" placeholder="enter your name" />
          <input
            type="email"
            className="Input"
            placeholder="enter your email"
          />
          <input
            type="text"
            className="Input"
            placeholder="enter your course"
          />
          <input
            type="number"
            className="Input"
            placeholder="enter your year of study"
          />
          <select name="" id="">
            <option value="">Enter Your Preffered Track</option>
            <option value="">Cyber Security</option>
            <option value="">Cloud Engineering</option>
            <option value="">Power</option>
            <option value="">UI/UX</option>
            <option value="">Mobile Application</option>
          </select>
          <button className="subscribe-btn">Subscribe</button>
        </form>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
interface tracksContent {
  track?: string;
  trackExerpt: string;
  trackWhatToExpect: string;
  trackImageUrl: string;
}
function TracksContainer({
  track,
  trackExerpt,
  trackWhatToExpect,
  trackImageUrl,
}: tracksContent) {
  return (
    <div className="track-container">
      <div className="track-container-image-wrapper">
        <img src={trackImageUrl} alt="" />
      </div>
      <div className="track-details">
        <h1 className="track">{track}</h1>
        <h1 className="tracks-header">What We Offer</h1>
        <p className="track-details-paragraph">
          {trackExerpt}
          <br />
          <span className="tracks-header">What To Expect</span>
          {trackWhatToExpect}
        </p>
      </div>
      <button className="track-btn">Explore Now</button>
    </div>
  );
}

export default Tracks;
