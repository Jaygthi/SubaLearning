import AboutIntro from "../components/layout/AboutIntro";
import WorldMap from "../components/layout/WorldMap";
import "../../src/styles/About.css";
import AcademicExcellence from "../components/layout/AcademicExcellence";
import MeetMentor from "../components/layout/MeetMentor";

export default function About() {
  return (
     <div className="container">
      <div className="flex">
        <div className="flex-start">
    <AboutIntro/>
    <AcademicExcellence/>
    <WorldMap/>
    <MeetMentor/>

    </div>
    </div>
    </div>
  );
}