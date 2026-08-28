import SectionHeader from "../common/SectionHeader";
import TutorCard from "../common/TutorCard";

import "../../styles/TutorCard.css";

interface Tutor {
  id: number;
  name: string;
  image: string;
  description: string;
  achievement: string;
}

interface TutorSectionProps {
  tutors: Tutor[];
}

export default function TutorSection({
  tutors,
}: TutorSectionProps) {
  return (
    <section
      className="tutor-section py-5"
      aria-labelledby="tutor-section-title"
    >
      <div className="container">

        <SectionHeader
          title="The Tutor Who Made Us Love Numbers"
        />

        <div className="row g-4">

          {tutors.map((tutor) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={tutor.id}
            >
              <TutorCard
                name={tutor.name}
                image={tutor.image}
                description={tutor.description}
                achievement={tutor.achievement}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}