import "../../styles/TutorCard.css";

export interface TutorCardProps {
  name: string;
  image: string;
  description: string;
  achievement: string;
}

export default function TutorCard({
  name,
  image,
  description,
  achievement,
}: TutorCardProps) {
  return (
    <article className="tutor-card h-100">

      <img
        src={image}
        alt={`${name} tutor`}
        className="tutor-card__image"
        loading="lazy"
      />

      <div className="tutor-card__body">

        <p className="tutor-card__description">
          {description}
        </p>

        <p className="tutor-card__achievement mb-0">
          {achievement}
        </p>

      </div>

    </article>
  );
}