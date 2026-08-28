import StudentAchievementsCarousel from "../components/layout/AchievementsCarousal";
import WhyChooseUs from "../components/layout/ChooseUs";
import EduBoards from "../components/layout/EduBoards"
import ReviewSection from "../components/layout/Reviews";
import LearningSteps from "../components/layout/Steps";
import Subjects from "../components/layout/Subjects/Subjects";
import { studentAchievements } from "../data/data_Achievements";

export default function Home() {
  return (
    <div className="container">
      <div className="flex">
        <div className="flex-start">
          <EduBoards/>
          <Subjects/>
          <StudentAchievementsCarousel
            achievements={studentAchievements}
          />
          <WhyChooseUs/>
          <ReviewSection></ReviewSection>
          <LearningSteps/>
        </div>
      </div>
    </div>
  );
}