import tracksExerpts from "../Data/TracksExerpts.ts";
import "./tracks.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer.tsx";
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
    tracksExerpts.map((track)=>{
      return (<><TracksContainer key={track.id} trackExerpt = {track.exerpt} trackWhatToExpect={track.whatToExpect} trackImageUrl={track.imageUrl}/>

        </>)
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
