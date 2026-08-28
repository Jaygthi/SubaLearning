import { tutorEnrollmentSteps } from "../../data/data_TutorEnrollment";
import "../../styles/TutorEnrollment.css";

interface TutorEnrollmentProcessProps {
  title?: string;
  steps?: typeof tutorEnrollmentSteps;
  image?: string;
  imageAlt?: string;
}

export default function TutorEnrollmentProcess({
  title = "Tutor Enrollment Process",
  steps = tutorEnrollmentSteps,
  image = "src/assets/images/img_tutor_enroll.png",
  imageAlt = "Tutor participating in online teaching",
}: TutorEnrollmentProcessProps) {
  return (
    <section
      className="tutor-enrollment-process"
      aria-labelledby="tutor-enrollment-process-title"
    >
      <div className="container-fluid px-0">
                    <div className="tutor-enrollment-process__content">

              <h1
                id="tutor-enrollment-process-title"
                className="tutor-enrollment-process__title"
              >
                {title}
              </h1>
              </div>

        <div className="row g-0">

          {/* Process */}
          <div className="col-12">



              <ol className="tutor-enrollment-process__list">
                {steps.map((step) => (
                  <li
                    className="tutor-enrollment-process__item text-start"
                    key={step.id}
                  >
                    <div className="tutor-enrollment-process__text">
                      <p style={{textAlign: 'left'}}>
                       {step.id} . {step.title}
                      </p>

                      <p style={{textAlign: 'left'}}>
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

            </div>

          </div>

          {/* Tutor image */}
          <div className="col-12">

            <div className="tutor-enrollment-process__image-wrapper">
              <img
                src={image}
                alt={imageAlt}
                className="tutor-enrollment-process__image"
                loading="lazy"
              />
            </div>

          </div>

        </div>
    </section>
  );
}