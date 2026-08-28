import type { StudentAchievement } from "../../data/data_Achievements";

import "../../styles/AchievementCard.css";

interface StudentAchievementCardProps {
  achievement: StudentAchievement;
}

const imagePath = "src/assets/images/";
export default function StudentAchievementCard({
  achievement,
}: StudentAchievementCardProps) {
  return (
    <article className="student-achievement-card h-100">

      {/* Header */}
      <header className="student-achievement-header">
        <h3 className="student-achievement-name">
          {achievement.studentName}{" "}
          <span aria-hidden="true">|</span>{" "}
          {achievement.className}
        </h3>

        <p className="student-achievement-subject mb-0">
          Got centum in {achievement.subject}
        </p>
      </header>

      {/* Student Image */}
      <div className="student-achievement-image-wrapper">
        <img
          src={imagePath + achievement.image}
          alt={`${achievement.studentName}, ${achievement.className} student achievement`}
          className="student-achievement-image"
          loading="lazy"
        />
      </div>

      {/* Separator */}
      <div
        className="student-achievement-divider"
        aria-hidden="true"
      />

      {/* Description */}
      <p className="student-achievement-description mb-0">
        {achievement.description}
      </p>

    </article>
  );
}