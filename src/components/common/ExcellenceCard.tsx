import "../../styles/Excellence.css";

export interface ExcellenceCardProps {
  value: string;
  label: string;
}

export default function ExcellenceCard({
  value,
  label,
}: ExcellenceCardProps) {
  return (
    <article className="excellence-card green-white-gradient">
      <div className="excellence-card__value">
        {value}
      </div>

      <div className="excellence-card__label">
        {label}
      </div>
    </article>
  );
}