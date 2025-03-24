import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Events.css";
function Events() {
  return (
    <>
      <div className="events-header">
        <Header />
      </div>
      <div className="events-hero">
        <h1>
          Interested with our Programs ? Below is Weekly guide of what the
          learner can expect from us
        </h1>
      </div>
      <div className="weekly-guide">
        <Guide />
      </div>
      <div className="events-footer">
        <Footer />
      </div>
    </>
  );
}

function Guide() {
  return (
    <>
      <div className="todos">
        <h1>Monday</h1>
      </div>
      <div className="todos">
        <h1>Tuesday</h1>
      </div>
      <div className="todos">
        <h1>Wednesday</h1>
      </div>
      <div className="todos">
        <h1>Thursday</h1>
      </div>
      <div className="todos">
        <h1>Friday</h1>
      </div>
      <div className="todos">
        <h1>Saturday</h1>
      </div>
    </>
  );
}
export default Events;
