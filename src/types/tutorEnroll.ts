export interface TutorEnrollFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  subjects: string;
  level: string;
  experience: string;
}

export type TutorEnrollErrors = Partial<
  Record<keyof TutorEnrollFormData, string>
>;