import { Link } from "react-router-dom";
import "../../styles/MeetMentor.css";

import MeetMentorImage from "../../assets/images/img_happy_women.png";

export default function MeetMentor() {
  return (
    <section
      className="meetmentor_section"
      aria-labelledby="meetmentor_heading"
    >
      <div className="container my-5">
        <header className="text-center mb-4">
          <h2 className="meet-mentor-title">
            Meet the Mentor Behind the Mission
          </h2>
        </header>

        <div className="row g-0 align-items-stretch px-5">
          <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3 px-5 col-12">
            {/* LEFT IMAGE */}

            <Link
              to="/"
              className="flex-shrink-0"
              aria-label="SUBA Online Learning home"
            >
              <img
                src={MeetMentorImage}
                alt="SUBA Online Learning"
                className="img_meetmentor"
                loading="lazy"
              />
            </Link>

            {/* RIGHT CONTENT */}
            <div className="text-start px-3">
              <p className="py-3">
                <b>Suba Online Tuitions</b> provides a stimulating environment
                that helps children grow with confidence and excel in their
                academics. We focus on giving every student the individual
                attention and guidance that they may not always receive in
                school.
              </p>
              <p className="py-3">
                For the <b>past 18 years, </b>our vision has been to deliver a
                unique and personalized learning experience. Many of our
                students have achieved outstanding results in school
                examinations as well as public board exams, proving the success
                of our teaching methods.
              </p>
              <p className="py-3">
                We offer a wide range of subjects across 8 international and
                national syllabi, including:
                <b>
                  <ul className="py-2">
                    <li className="py-1 bi bi bi-caret-right-fill">
                      Cambridge IGCSE & A Levels{" "}
                    </li>
                    <li className="bi bi-caret-right-fill">ICSE & ISC </li>
                    <li className="bi bi bi-caret-right-fill">CBSE</li>
                    <li className="bi bi-caret-right-fill">Edexcel & GCSE</li>
                    <li className="bi bi-caret-right-fill">AQA IB </li>
                    <li className="bi bi-caret-right-fill">PYP & MYP </li>
                    <li className="bi bi-caret-right-fill">O Levels </li>
                  </ul>
                </b>
                To suit every learner’s needs, we provide flexible learning
                options such as{" "}
                <b>
                  {" "}
                  online classes, home tuitions, 1-on-1 coaching, and group
                  sessions.
                </b>{" "}
                Classes are scheduled after school
                hours and on weekends, allowing students to balance tuition with
                their regular studies. Every tutor at Suba Online Tuitions is
                highly experienced and specialized in their respective subjects,
                ensuring quality education at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
