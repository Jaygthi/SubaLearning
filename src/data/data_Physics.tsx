import physicsHero from "../assets/images/img_physics_intro.png";
import tutor1 from "../assets/images/img_physics_review_1.png";
import tutor2 from "../assets/images/img_physics_review_2.png";
import tutor3 from "../assets/images/img_physics_review_3.png";
import physicsImportance from "../assets/images/img_physics_intro.png"
import blog1 from "../assets/images/img_physics_blog_1.png"
import blog2 from "../assets/images/img_math_blog_2.png"

export const physicsPageData = {
  intro: {
    title: "Our Techniques for Learning and Mastering Physics",
    image: physicsHero,
    imageAlt:
      "Student learning physics with educational materials",

    topics: [
      "Grasp the Basics First",
      "Visualise the Problem",
      "Connect with Real-Life Applications",
      "Mathematics is the Key",
      "Focus on Understanding, Not Memorising",
      "Review Mistakes",
      "Practice Numericals Daily",
      "Use Step-by-Step Problem Solving",
    ],

    description:
      "Start with strong basics, then use diagrams and graphs to visualise problems. Connect concepts to real-life examples and practise maths-based equations daily. Focus on understanding instead of memorising. Review mistakes regularly and solve numerical problems to strengthen your concepts. Explain difficult topics to others to improve your understanding and retention.",
  },

  tutors: [
    {
      id: 1,
      name: "Physics Tutor 1",
      image: tutor1,
      description:
        "I really enjoyed your explanations, and your teaching style made difficult Physics topics easier to understand.",
      achievement: "Class 12 Physics",
    },
    {
      id: 2,
      name: "Physics Tutor 2",
      image: tutor2,
      description:
        "The explanations were clear and the teaching approach helped me understand difficult Physics concepts with confidence.",
      achievement: "Class 12 Physics (CBSE)",
    },
    {
      id: 3,
      name: "Physics Tutor 3",
      image: tutor3,
      description:
        "Your Physics teaching was clear, and the examples made learning each concept easier and more interesting.",
      achievement: "Class 10 Physics (CBSE)",
    },
  ],

  importance: {
    title: "How Physics Shapes Our Life and Future",

    image: physicsImportance,

    imageAlt:
      "Illustration representing applications of physics in technology",

    points: [
      {
        title: "Explains Natural Phenomena",
        description:
          "Physics helps us understand the world around us, including motion, forces, energy, waves, and gravity.",
      },
      {
        title: "Technology and Innovations",
        description:
          "Physics contributes to electronics, communication systems, medical equipment, computers, cars, and spacecraft.",
      },
      {
        title: "Improves Daily Life",
        description:
          "Physics is part of everyday activities such as cooking, electricity, transportation, lighting, and communication.",
      },
      {
        title: "Medical Advancements",
        description:
          "Physics plays an important role in X-rays, MRI systems, radiation treatment, lasers, ultrasound, and medical imaging.",
      },
    ],
  },

  blogs: {
    title: "Blogs about Physics",
    blog:[
    {
      id: 1,
      title: "4 Ways Black Holes Define Physics",
      description:
        "Explore some of the fascinating ideas behind black holes and modern physics.",
      image: blog1,
      slug: "4-ways-black-holes-define-physics",
    },
    {
      id: 2,
      title: "7 Mind-Blowing Ways Your Smartphone Uses Quantum Physics",
      description:
        "Discover how modern physics contributes to technologies we use every day.",
      image: blog2,
      slug: "smartphone-quantum-physics",
    },
  ],
},
};