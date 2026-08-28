export interface StudentAchievement {
  id: number;
  studentName: string;
  className: string;
  subject: string;
  image: string;
  description: string;
}

export const studentAchievements: StudentAchievement[] = [
  {
    id: 1,
    studentName: "Abinash",
    className: "Class 6",
    subject: "Maths",
    image: "img_Achieve_1.png",
    description:
      "I was never confident in maths before I met her. But she was very patient and helped me solve understand the subject. She taught me from the basics and made the concepts so easy to learn.",
  },

  {
    id: 2,
    studentName: "Abinash",
    className: "Class 12",
    subject: "Maths",
    image: "img_Achieve_2.png",
    description:
      "I was struggle to learn maths in class 6. My parents joined in online tuition. With in a month my maths skill is increased. Thank you Mam. Now I got centum in Maths.",
  },

  {
    id: 3,
    studentName: "Smitha",
    className: "Class 12",
    subject: "Physics",
    image: "img_Achieve_3.png",
    description:
      "I was struggle to learn maths in class 6. My parents joined in online tuition. With in a month my maths skill is increased. Thank you Mam. Now I got centum in Maths.",
  },

  // {
  //   id: 4,
  //   studentName: "Rahul",
  //   className: "Class 10",
  //   subject: "Physics",
  //   image: "/images/students/rahul-class-10.jpg",
  //   description:
  //     "The online classes helped me understand difficult concepts clearly. The teaching method is simple and easy to follow.",
  // },

  // {
  //   id: 5,
  //   studentName: "Priya",
  //   className: "Class 12",
  //   subject: "Chemistry",
  //   image: "/images/students/priya-class-12.jpg",
  //   description:
  //     "The regular practice sessions and personal attention helped me improve my confidence and examination performance.",
  // },
];