import SubjectIntro from "../components/layout/SubjectIntro";
// import TutorSection from "../components/layout/TutorSection.tsx";
import ImportanceSection from "../components/layout/ImportanceSection";
// import BlogSection from "../components/layout/BlogSection.tsx";
import { mathsPageData } from "../data/data_Maths.tsx"
import "../styles/SubjectIntro.css";

export default function Maths() {
  return (
    <div className="container">
      <div className="flex">
        <div className="flex-start">
      <SubjectIntro
        title={mathsPageData.intro.title}
        image={mathsPageData.intro.image}
        imageAlt={mathsPageData.intro.imageAlt}
        topics={mathsPageData.intro.topics}
        description={mathsPageData.intro.description}
       />


      {/* <TutorSection
        tutors={mathsPageData.tutors}
       /> */}

       <ImportanceSection
         title={mathsPageData.importance.title}
         image={mathsPageData.importance.image}
         imageAlt={mathsPageData.importance.imageAlt}
         points={mathsPageData.importance.points}
       />

       {/* <BlogSection
        title={mathsPageData.blogs.title}
        blogs={mathsPageData.blogs.blog}
       />  */}

       </div>
</div>
</div>
  )
      
}
