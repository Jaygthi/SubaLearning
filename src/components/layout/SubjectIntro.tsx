import SubjectPills from "../common/SubjectPills"
import "../../styles/SubjectIntro.css";

interface SubjectIntroProps {
  title: string;
  image: string;
  imageAlt: string;
  topics: string[];
  description: string;
}

export default function SubjectIntro({
  title,
  image,
  imageAlt,
  topics,
  description,
}: SubjectIntroProps) {
  return (
    <section
      className="subject-intro py-4 py-lg-5"
      aria-labelledby="subject-intro-title"
    >
      <div className="container">

        <div className="row align-items-start g-4">

          {/* Image */}
          <div className="col-12 col-md-4">
            <img
              src={image}
              alt={imageAlt}
              className="subject-intro__image img-fluid"
            />
          </div>

          {/* Content */}
          <div className="col-12 col-md-8">

            <h1
              id="subject-intro-title"
              className="subject-intro__title text-center"
            >
              {title}
            </h1>

            <SubjectPills items={topics} />

            <p className="subject-intro__description text-start mb-0">
              {description}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}