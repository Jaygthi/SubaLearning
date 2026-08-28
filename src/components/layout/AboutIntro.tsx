import "../../styles/About.css";
import aboutImage from "../../assets/images/img_about_us.png";
export default function AboutIntro() {
  return (
    <section
      className="about-intro"
      aria-labelledby="about-intro-heading"
    >
      <div className="container">

        <div className="row justify-content-center">

          <div className="col-12 col-lg-9">

            <h1
              id="about-intro-heading"
              className="about-intro__title text-left"
            >
              About Us
            </h1>

            <div className="row align-items-start g-4">

              {/* Image */}

              <div className="col-12 col-md-4">

                <div className="about-intro__image-wrapper">
                  <img
                    src={aboutImage}
                    alt="Students participating in online learning"
                    className="about-intro__image"
                  />
                </div>

              </div>

              {/* Content */}

              <div className="col-12 col-md-8">

                <div className="about-intro__content">

                  <p>
                    We take pride in delivering excellence in
                    education. Affiliated with prestigious
                    boards such as IB, ICSE, and IGCSE, we
                    foster an environment that encourages
                    innovative learning and modern teaching
                    methodologies tailored to meet each
                    student's unique needs.
                  </p>

                  <p>
                    We offer excellent coaching for students
                    across multiple boards, from primary to
                    higher secondary levels, ensuring a strong
                    academic foundation.
                  </p>

                  <p>
                    Our expertise extends to undergraduate and
                    engineering students, providing them with
                    in-depth subject knowledge, problem-solving
                    skills, and exam-oriented guidance.
                  </p>

                  <p className="mb-0">
                    With a team of highly qualified educators,
                    personalized attention, and well-structured
                    study plans, we empower learners to not only
                    excel academically but also develop the
                    skills necessary for lifelong success.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}