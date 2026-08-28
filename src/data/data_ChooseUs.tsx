import {
  People,
  Clock,
  Display,
  PersonCheck,
  CalendarCheck,
  CurrencyRupee,
  JournalCheck,
} from "react-bootstrap-icons";

export interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 1,
    title: "Personalized Attention",
    description:
      "One-on-one or small group sessions ensure that every student gets the attention they need.",
    icon: People,
  },
  {
    id: 2,
    title: "Flexible Timings",
    description:
      "We offer classes that fit your schedule, including evenings and weekends.",
    icon: Clock,
  },
  {
    id: 3,
    title: "Interactive Digital Tools",
    description:
      "Our online platform uses whiteboards, quizzes, and recorded sessions for better understanding and revision.",
    icon: Display,
  },
  {
    id: 4,
    title: "Experienced & Qualified Tutors",
    description:
      "Our tutors are highly qualified professionals with years of experience in teaching national and international syllabuses.",
    icon: PersonCheck,
  },
  {
    id: 5,
    title: "Regular Assessments & Feedback",
    description:
      "Frequent tests and progress reports keep parents updated and help students improve.",
    icon: CalendarCheck,
  },
  {
    id: 6,
    title: "Affordable Pricing",
    description:
      "High-quality education at competitive and transparent rates.",
    icon: CurrencyRupee,
  },
  {
    id: 7,
    title: "Syllabus Coverage & Exam Prep",
    description:
      "We cover CBSE, ICSE, State Board, and international syllabuses with special focus on exams.",
    icon: JournalCheck,
  },
];