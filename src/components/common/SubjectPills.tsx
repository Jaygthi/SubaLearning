import "../../styles/SubjectPills.css";

interface SubjectPillsProps {
  items: string[];
}

export default function SubjectPills({
  items,
}: SubjectPillsProps) {
  return (
    <div className="subject-pills d-flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="subject-pill"
        >
          {item}
        </span>
      ))}
    </div>
  );
}