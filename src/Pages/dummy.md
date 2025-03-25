<section class="ui-ux-track">
    <h2>UI/UX Design Track</h2>
    
    <h3>What We Offer</h3>
    <p>
        Explore the principles of creating user-friendly and visually appealing interfaces. Learn user research, 
        wireframing, prototyping, and usability testing through interactive projects.
    </p>
    <p>
        Gain hands-on experience designing intuitive user interfaces and enhancing user experiences with 
        industry-standard tools and techniques.
    </p>

    <h3>What to Expect</h3>
    <p>
        By the end of this track, you will be proficient in UI/UX design, ready to create effective, user-centric
        designs for websites and mobile applications.
    </p>

</section>

<section class="web-development-track">
    <h2>Web Development Track</h2>
    
    <h3>What We Offer</h3>
    <p>
        Learn how to build dynamic and responsive websites using front-end technologies like HTML, CSS, and JavaScript, 
        along with back-end frameworks such as Node.js and databases.
    </p>
    <p>
        Engage in hands-on projects that develop both the client-side and server-side of web applications.
    </p>

    <h3>What to Expect</h3>
    <p>
        By the end of this track, you will have the skills to design, develop, and deploy full-stack web applications,
        creating robust and scalable solutions.
    </p>

</section>

<section class="mobile-development-track">
    <h2>Mobile Apps Development Track</h2>
    
    <h3>What We Offer</h3>
    <p>
        Learn to design and build mobile applications for Android and iOS platforms using Java, Kotlin, Swift, and Dart.
    </p>
    <p>
        Work on hands-on projects that focus on building user-friendly and efficient mobile applications.
    </p>

    <h3>What to Expect</h3>
    <p>
        By the end of this track, you will be capable of building, testing, and deploying high-performance mobile
        applications for smartphones and tablets.
    </p>

</section>

<section class="cloud-engineering-track">
    <h2>Cloud Engineering Track</h2>
    
    <h3>What We Offer</h3>
    <p>
      
    </p>
    <p>
        Engage in hands-on labs and practical projects to build and manage scalable, secure cloud infrastructures.
    </p>

    <h3>What to Expect</h3>
    <p>
        By the end of this track, you will be proficient in leveraging cloud technologies to design and maintain
        cloud-based solutions for various applications and services.
    </p>

</section>

<section class="power-platform-track">
    <h2>Power Platform Track</h2>
    
    <h3>What We Offer</h3>
    <p>
        Explore Microsoft's Power Platform, including Power BI, Power Apps, Power Automate, and Power Virtual Agents. 
        Learn to create custom business applications, automate workflows, and analyze data.
    </p>
    <p>
        Gain hands-on experience in developing integrated solutions that enhance business processes.
    </p>

    <h3>What to Expect</h3>
    <p>
        By the end of this track, you will be skilled in using the Power Platform to transform organizational operations
        and improve efficiency with minimal coding.
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
