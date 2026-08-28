import type { WhyChooseUsItem } from "../../data/data_ChooseUs";
import "../../styles/ChooseUsCard.css";

interface WhyChooseUsCardProps {
  item: WhyChooseUsItem;
}

export default function WhyChooseUsCard({
  item,
}: WhyChooseUsCardProps) {
  const Icon = item.icon;

  return (
    <article className="why-choose-card">

      {/* Icon */}
      <div className="why-choose-card-icon">
        <Icon
          size={32}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="why-choose-card-content">

        <h3 className="why-choose-card-title">
          {item.title}
        </h3>

        <p className="why-choose-card-description mb-0">
          {item.description}
        </p>

      </div>

    </article>
  );
}