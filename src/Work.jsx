import { useState } from "react";

export default function Work() {
  const [work, setWork] = useState({
    job: "",
    company: "",
    yearStarted: "",
    yearEnded: "",
    location: "",
  });

  return (
    <div className="bigSection work">
      <label htmlFor="job">Job name</label>
      <input
        type="text"
        name="job"
        onChange={(e) => {
          setWork({ ...work, job: e.target.value });
        }}
      />

      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        onChange={(e) => {
          setWork({ ...work, company: e.target.value });
        }}
      />

      <label htmlFor="yearStartedWork">Year started</label>
      <input
        type="date"
        name="yearStartedWork"
        onChange={(e) => {
          setWork({ ...work, yearStarted: e.target.value });
        }}
      />

      <label htmlFor="yearEndedWork">Year ended</label>
      <input
        type="date"
        name="yearEndedWork"
        onChange={(e) => {
          setWork({ ...work, yearEnded: e.target.value });
        }}
      />
    </div>
  );
}
