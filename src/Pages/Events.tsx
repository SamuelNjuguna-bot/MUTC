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
        <Guide
          day="Monday"
          todo="Cyber security - every Monday from 4pm to 7pm at computer lab F04, led by Webster Ifedha."
        />
        <Guide
          day="Tuesday"
          todo="UI/UX - every Tuesday from 5pm to 8pm at computer lab F04, led by Manase Gunga."
        />
        <Guide
          day="Wednesday"
          todo="Web development - every Wednesday from 6pm to 9pm at computer lab F04, led by Carolyne Githenduka."
        />
        <Guide
          day="Thursday"
          todo="Mobile apps development - every Thursday from 4pm to 7pm led by Stanley Amunze."
        />
        <Guide
          day="Friday"
          todo="Cloud engineering - every Friday from 3pm to 6pm at computer lab F04, led by Paul Karanja."
        />
        <Guide
          day="Saturday"
          todo="Power Platform - every Saturday from 1pm to 4pm at computer lab F04, led by Evyonn Mbithe."
        />
      </div>
      <div className="events-footer">
        <Footer />
      </div>
    </>
  );
}
interface myGuige {
  day: string;
  todo: string;
}
function Guide({ day, todo }: myGuige) {
  return (
    <>
      <div className="todos">
        <h1 className="day">{day}</h1>
        <h1>{todo}</h1>
        <button className="register">Register</button>
      </div>
      
    </>
  );
}
export default Events;
