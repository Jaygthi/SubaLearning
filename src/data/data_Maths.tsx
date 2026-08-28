import mathsHero from "../assets/images/img_math_intro.png";
import tutor1 from "../assets/images/img_math_review_1.png";
import tutor2 from "../assets/images/img_math_review_2.png";
import tutor3 from "../assets/images/img_math_review_3.png";
import mathsImportant from "../assets/images/img_math_importance.png";
import blog1 from "../assets/images/img_math_blog_1.png";
import blog2 from "../assets/images/img_math_blog_2.png";

export const mathsPageData = {
  intro: {
    title: "Maths",
    image: mathsHero,
    imageAlt:
      "Mathematics learning materials and educational tools",
    topics: [
      "Use Mental Math Tricks",
      "Break Problems Into Steps",
      "Check with Reverse Calculation",
      "Practice with Real-Life Examples",
      "Understand, Don't Memorise",
      "Daily Practice",
      "Learn Common Mistakes",
      "Group Study & Teaching Others",
    ],
    description:
      "Solve problems step-by-step, writing each stage clearly. Relate concepts to real-life situations like discounts or home design. Use mental math tricks such as shortcuts and patterns. Focus on understanding formulas with the help of diagrams. Practice daily for 15–30 minutes, mixing easy and tough problems. Check answers by working backwards. Keep track of common mistakes to avoid repeating them. Use colour coding for quick revision. Explain interactive topics to others to strengthen understanding.",
  },

  tutors: [
    {
      id: 1,
      name: "Tutor 1",
      image: tutor1,
      description:
        "Maths was my toughest subject until I met her. She helped me understand concepts from the basics.",
      achievement: "Grade 9 Maths CBSE",
    },
    {
      id: 2,
      name: "Tutor 2",
      image: tutor2,
      description:
        "I struggled with mathematics, but regular practice and personalized teaching helped me improve.",
      achievement: "Class 8 Maths UK Curriculum",
    },
    {
      id: 3,
      name: "Tutor 3",
      image: tutor3,
      description:
        "The teaching method made difficult topics simple and helped me score better in examinations.",
      achievement: "Class 10 Maths CBSE",
    },
  ],

  importance: {
    title: "Why Maths is Important ?",
    image: mathsImportant,
    imageAlt:
      "Student thinking about a mathematics problem",
    points: [
      {
        title: "Daily Life Use –",
        description:
          "We use maths in cooking, measuring ingredients, shopping, discounts, bills, time management, and travel.",
      },
      {
        title: "Problem-Solving Skills –",
        description:
          "Maths trains the brain to think logically and solve problems step by step.",
      },
      {
        title: "Future Careers –",
        description:
          "Professions like engineering, medicine, architecture, and computer science require mathematics.",
      },
      {
        title: "Technology & Science –",
        description:
          "Mathematics supports everything from smartphones to space rockets and scientific discoveries.",
      },
      {
        title: "Money & Budgeting –",
        description:
          "Maths helps us save, spend wisely, calculate interest, and plan our finances.",
      },
    ],
  },

  blogs:{
    title: "Blogs about MAths",
    blog:[
    {
      id: 1,
      title: "Math Problem for Your Students",
      description:
        "This will help keep your students engaged and practicing.",
      image: blog1,
      slug: "math-problem-for-students",
    },
    {
      id: 2,
      title: "17 Interesting Math Books That You Should Read Now",
      description:
        "Discover useful books that make mathematics easier and more interesting.",
      image: blog2,
      slug: "17-interesting-math-books",
    },
  ]
},
};