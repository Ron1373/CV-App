import { useState } from "react";

import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import CV from "./Components/CV";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [date, setDate] = useState("");
  const [degree, setDegree] = useState("");
  const [education, setEducation] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [experience, setExperience] = useState([]);
  return (
    <div class="container">
      <div className="info-container">
        <GeneralInfo
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
        />
        <EducationInfo
          university={university}
          setUniversity={setUniversity}
          degree={degree}
          setDegree={setDegree}
          date={date}
          setDate={setDate}
          education={education}
          setEducation={setEducation}
        />
        <ExperienceInfo
          company={company}
          setCompany={setCompany}
          position={position}
          setPosition={setPosition}
          responsibilities={responsibilities}
          setResponsibilities={setResponsibilities}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          experience={experience}
          setExperience={setExperience}
        />
      </div>
      <div className="cv-container">
        <CV
          name={name}
          email={email}
          phone={phone}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;
