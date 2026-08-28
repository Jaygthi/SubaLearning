export interface ContactFormData {
  name: string;
  mobile: string;
  email: string;
  comments: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormData, string>
>;