import SubjectIntro from "../components/layout/SubjectIntro"
import TutorSection from "../components/layout/TutorSection";
import ImportanceSection from "../components/layout/ImportanceSection";
import BlogSection from "../components/layout/BlogSection";

import { physicsPageData } from "../data/data_Physics";

export default function Physics() {
  return (
    <main>
      <SubjectIntro
        title={physicsPageData.intro.title}
        image={physicsPageData.intro.image}
        imageAlt={physicsPageData.intro.imageAlt}
        topics={physicsPageData.intro.topics}
        description={physicsPageData.intro.description}
      />

      <TutorSection
        tutors={physicsPageData.tutors}
      />

      <ImportanceSection
        title={physicsPageData.importance.title}
        image={physicsPageData.importance.image}
        imageAlt={physicsPageData.importance.imageAlt}
        points={physicsPageData.importance.points}
      />

      <BlogSection
        title ={physicsPageData.blogs.title}
        blogs={physicsPageData.blogs.blog}
      />
    </main>
  );
}