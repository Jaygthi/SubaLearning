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
      name: "Chemistry (Classes From 6th to 10th)",
      description: "Chemistry classes for students",
    },
  ];

  return (
    <section className="subjects-section" aria-labelledby="subjects-heading">
      <div className="container-fluid p-0">
        <div className="row g-0 px-6 py-6 m-0 lh-6 align-items-stretch">
          {/* Online Subjects */}
          <span className="col-12">
            <span className="row g-0">
              <span className="col-3 subject-head">Online Subjects</span>
              <span className="col-9 subjects-list">
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
        </div>
      </div>
    </section>
  );
}
