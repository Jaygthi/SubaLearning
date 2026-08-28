import "../../styles/stepCard.css";

const StepCard = ({ stepNumber, stepTitle, items, isLastStep }) => {
  return (
    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
      <div className="text-center mb-3">
        <span className="step-number">
          STEP {stepNumber}
        </span>
      </div>

      <article 
        className={`card h-100 border-0 rounded-4 p-4 shadow-sm step-card ${!isLastStep ? 'step-card-arrow' : ''}`}
        itemProp="step"
        itemScope
        itemType="https://schema.org/HowToStep"
      >
        <meta itemProp="position" content={stepNumber.toString()} />
        <div className="card-body d-flex flex-column align-items-center text-center p-2">
          
          <h3 className="card-title h3 fw-bold text-dark mb-4" itemProp="name">
            {stepTitle}
          </h3>

          <ul className="list-unstyled text-start w-100 fs-6 text-dark lh-lg mb-1" itemProp="text">
            {items.map((item, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <span className="me-2 fw-bold" aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </article>
    </div>
  );
};

export default StepCard;