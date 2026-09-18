export interface ContactFormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormData, string>
>;