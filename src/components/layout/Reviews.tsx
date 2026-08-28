import ReviewCard from '../common/ReviewCard';
import { reviewData } from "../../data/data_Reviews";

const ReviewSection = () => {
  return (
    <section className="py-5 bg-light" aria-labelledby="reviews-heading">
      <div className="container pt-1 mt-0">

        {/* Section Heading */}

        <header className="text-left mb-5 pb-6">
          <h2 id="reviews-heading" className='review-section-title'>
            Students Reviews
          </h2>
        </header>
        
        {/* Responsive Grid */}
        <div className="row g-4">
          {reviewData.map((review) => (
            <div key={review.id} className="col-12 col-md-6 col-lg-4">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;