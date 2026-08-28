import StepCard from '../common/StepCard';
import "../../styles/Steps.css";
import { stepsData } from "../../data/data_Steps";

const LearningSteps = () => {
  return (
    <section 
      className="steps-section"
      aria-labelledby="steps-section-heading"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <div className="container py-4">
        
        {/* Accessible Main Section Title */}
        <h2 
          id="steps-section-heading" 
          className="text-white text-center mb-5"
          itemProp="name"
        >
          Simple Steps to Start Your Learning Journey!
        </h2>

        {/* Steps Grid Container */}
        <div className="row align-items-start position-relative">
          {stepsData.map((step, index) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              stepTitle={step.stepTitle}
              items={step.items}
              isLastStep={index === stepsData.length-1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningSteps;