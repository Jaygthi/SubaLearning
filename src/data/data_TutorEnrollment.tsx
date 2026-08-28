export interface EnrollmentStep {
  id: number;
  title: string;
  description: string;
}

export const tutorEnrollmentSteps: EnrollmentStep[] = [
  {
    id: 1,
    title: "Fill the Form",
    description:
      "Submit your personal and teaching details.",
  },
  {
    id: 2,
    title: "Get a Call",
    description:
      "Our team will reach out to you for verification.",
  },
  {
    id: 3,
    title: "Attend the Interview Meeting",
    description:
      "Showcase your skills and teaching style.",
  },
  {
    id: 4,
    title: "Receive Confirmation Mail",
    description:
      "Get official approval as a tutor.",
  },
  {
    id: 5,
    title: "Start Teaching",
    description:
      "Begin your journey as a registered tutor with us.",
  },
];