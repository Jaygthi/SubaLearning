import "../../styles/SectionHeader.css";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <header className="section-header text-center mb-4 mb-lg-5">
      <h2 className="section-header__title">
        {title}
      </h2>

      {subtitle && (
        <p className="section-header__subtitle mb-0">
          {subtitle}
        </p>
      )}
    </header>
  );
}