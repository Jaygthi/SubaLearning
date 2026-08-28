import Board from "../common/Board";

import "../../styles/EduBoards.css";

import homeImage from "../../assets/images/img_mom_child.jpg";

const educationBoards = [
  {
    name: "CBSE",
    description: "Classes From 6th to 12th",
  },
  {
    name: "IGCSE",
    description: "Classes From 6th to 12th",
  },
  {
    name: "ICSE",
    description: "Classes From 6th to 12th",
  },
  {
    name: "TamilNadu Board",
    description: "Classes From 6th to 12th",
  },
  {
    name: "Newzealand curriculum",
    description: "Classes From 6th to 12th",
  },
  {
    name: "US Syllabus",
    description: "Students with cut off",
  },
];

export default function EduBoards() {
  return (
      <section
        className="education-section"
        aria-labelledby="education-heading"
      >
        <div className="container-fluid px-0">

          <div className="row g-0 align-items-stretch">

            {/* LEFT IMAGE */}
            <div className="col-12 col-lg-5">

              <div
                className="education-image"
                style={{
                  backgroundImage: `url(${homeImage})`,
                }}
                role="img"
                aria-label="Student learning online with a parent"
              />

            </div>

            {/* RIGHT CONTENT */}
            <div className="col-12 col-lg-7 bg-green">

              <div className="education-content">

                <header className="education-header">
                  <p className="education-subtitle">
                    We Are Experts in
                  </p>

                  <h1 id="education-heading">
                    Classes &amp; Educational Boards
                  </h1>
                </header>

                <div className="row g-4 g-xl-5">

                  {educationBoards.map((board) => (
                    <div
                      className="col-12 col-md-6"
                      key={board.name}
                    >
                      <Board
                        name={board.name}
                        description={board.description}
                      />
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
  );
}