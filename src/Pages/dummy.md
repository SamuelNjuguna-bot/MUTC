<section class="ui-ux-track">
    <h2>UI/UX Design Track</h2>
    
    <h3>What We Offer</h3>
    <p>

    </p>

    <h3>What to Expect</h3>
    <p>
        
    </p>

</section>

<section class="web-development-track">
    <h2>Web Development Track</h2>
    
    <h3>What We Offer</h3>
    <p>

    </p>

    <h3>What to Expect</h3>
    <p>

    </p>

</section>

<section class="mobile-development-track">
    <h2>Mobile Apps Development Track</h2>
    
    <h3>What We Offer</h3>
    <p>

    </p>

    <h3>What to Expect</h3>
    <p>

    </p>

</section>

<section class="cloud-engineering-track">
    <h2>Cloud Engineering Track</h2>
    
    <h3>What We Offer</h3>
    <p>
       
    </p>

    <h3>What to Expect</h3>
    <p>

    </p>

</section>

<section class="power-platform-track">
    <h2>Power Platform Track</h2>
    
    <h3>What We Offer</h3>
    <p>

    </p>

    <h3>What to Expect</h3>
    <p>

    </p>

</section>
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cyber from "../assets/tracks/track-cyber.jpeg";
import tracksExerpts from "../Data/TracksExerpts.ts";
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
        {
    tracksExerpts.map((track, id)=>{
      return <TracksContainer trackExerpt = {track.whatToExpect} trackWhatToExpect={track.whatToExpect} trackImageUrl={Cyber}/>
     })
        }

      </div>
      <div className="footer">
        <Footer />
      </div>
    </>

);
}
interface tracksContent{
trackExerpt:string;
trackWhatToExpect:string,
trackImageUrl: string;
}
function TracksContainer({trackExerpt, trackWhatToExpect, trackImageUrl}:tracksContent) {
return (

<div className="track-container">

      <div className="track-container-image-wrapper">
        <img src={trackImageUrl} alt="" />
      </div>
      <div className="track-details">
        <h1 className="tracks-header">What We Offer</h1>
        <p className="track-details-paragraph">
                {trackExerpt}
          <br /><span className="tracks-header" >What To Expect</span>
                {trackWhatToExpect}
        </p>
      </div>
      <button className="track-btn">Explore Now</button>
    </div>

);
}

export default Tracks;





import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cyber from "../assets/tracks/track-cyber.jpeg";
import Cloud from "../assets/tracks/cloud.jpeg";
import webdesign from "../assets/tracks/web-design.jpeg";
import mobile from "../assets/tracks/mobile-app.jpeg";
import powerbi from "../assets/tracks/powerbi.jpeg";
import uiUx from "../assets/tracks/ui-ux.jpeg";import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cyber from "../assets/tracks/track-cyber.jpeg";
