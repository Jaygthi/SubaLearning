export interface stepsDataItem {
  stepNumber: number;
  stepTitle: string;
  items: React.ReactNode[];
}

export const stepsData: stepsDataItem[] = [
  {
    stepNumber: 1,
    stepTitle: 'Book Your Demo Class',
    items: [
      <>Click <strong>"Demo Class"</strong> on our website.</>,
      <>Fill in your details in the quick form.</>,
      <>Click <strong>OK</strong> to submit.</>
    ]
  },
  {
    stepNumber: 2,
    stepTitle: 'Attend the Demo Session',
    items: [
      <>Receive a confirmation via <strong>email</strong> or phone <strong>call</strong> from us.</>,
      <>Join the scheduled <strong>demo class</strong> and experience our teaching style.</>
    ]
  },
  {
    stepNumber: 3,
    stepTitle: 'Enroll & Start Learning',
    items: [
      <>Confirm your enrollment after the demo.</>,
      <>Complete payment & get your class schedule.</>,
      <>Your child is now ready to <strong>start learning</strong>!</>
    ]
  }
];