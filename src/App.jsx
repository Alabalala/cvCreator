import { useState } from "react";
import "./App.css";
import Nav from "./Nav.jsx";
import AboutYou from "./AboutYou.jsx";
import Divider from "./divider.jsx";

function App() {
  return (
    <>
      <Divider title="ABOUT YOU" iconClassName="fa-solid fa-user" />
      <AboutYou />
      <Divider title="EDUCATION" iconClassName="fa-solid fa-building-columns" />

      <Nav />
    </>
  );
}

export default App;
