import "./App.css";
import Nav from "./Nav.jsx";
import AboutYou from "./AboutYou.jsx";
import Divider from "./divider.jsx";
import Education from "./education.jsx";
import Work from "./Work.jsx";

function App() {
  return (
    <>
      <main>
        <Divider title="ABOUT YOU" iconClassName="fa-solid fa-user" />
        <AboutYou />
        <Divider
          title="EDUCATION"
          iconClassName="fa-solid fa-building-columns"
        />
        <Education />
        <Divider title="WORK EXPERIENCE" iconClassName="fa-solid fa-suitcase" />
        <Work />
      </main>
      <Nav />
    </>
  );
}

export default App;
