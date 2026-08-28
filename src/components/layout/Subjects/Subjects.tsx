import "../../../styles/Subjects.css";

export default function Subjects() {
  const OnlineSubjects = [
    {
      name: "Maths",
      description: "Maths classes for students",
    },
    {
      name: "Physics",
      description: "Physics classes for students",
    },
    {
      name: "Chemistry",
      description: "Chemistry classes for students",
    },
    {
      name: "Neet",
      description: "Neet coaching for students",
    },
  ];

  const OfflineSubjects = [
    {
      name: "Maths",
      description: "Classes From 6th to 12th",
    },
    {
      name: "Hindi",
      description: "Classes From 6th to 12th",
    },
  ];

  return (
    <section className="subjects-section" aria-labelledby="subjects-heading">
      <div className="container-fluid p-0">
        <div className="row g-0 px-6 py-6 m-0 lh-6 align-items-stretch">
          {/* Online Subjects */}
          <span className="col-12 col-lg-7">
            <span className="row g-0">
              <span className="col-5 subject-head">Online Subjects</span>
              <span className="col-7 subjects-list">
                {OnlineSubjects.map((subject, index) => (
                  <span key={subject.name} className="subject-item p-1">
                    {index !== 0 && index !== OnlineSubjects.length && (
                      <span className="separator">|</span>
                    )}
                    <span className="subject-text">{subject.name}</span>
                  </span>
                ))}
              </span>
            </span>
          </span>

          {/* Offline Subjects */}
          <span className="col-12 col-lg-5">
            <span className="row g-0">
              <span className="col-5 subject-head">Offline Subjects</span>
              <span className="col-7 subjects-list">
                {OfflineSubjects.map((subject, index) => (
                  <span key={subject.name} className="subject-item p-1">
                    {index !== 0 && index !== OfflineSubjects.length && (
                      <span className="separator">|</span>
                    )}
                    <span className="subject-text">{subject.name}</span>
                  </span>
                ))}
              </span>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
