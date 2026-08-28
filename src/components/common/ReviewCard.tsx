import StarRating from "../common/StarRating"
import "../../styles/Reviews.css";

const imageUrl= "src/assets/images/";
const ReviewCard = ({ review }) => {
  const { title, content, author, rating, date, avatarUrl } = review;

  return (
    <article 
      className="card h-100 border-0 shadow-sm rounded-3 p-3" 
      itemScope 
      itemType="https://schema.org/Review"
    >
      <div className="card-body d-flex flex-column justify-content-between text-start p-2">
        <div>
          {/* SEO Rating Microdata */}
          <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
            <meta itemProp="ratingValue" content={rating.toString()} />
            <meta itemProp="bestRating" content="5" />
            <StarRating rating={rating} />
          </div>

          <h3 className="card-title mb-3" itemProp="name">
            {title}
          </h3>

          <p className="card-text text-secondary lh-base fs-6 mb-4" itemProp="reviewBody">
            {content}
          </p>
        </div>

        {/* Footer / Author Section */}
        <div className="d-flex align-items-center text-left mt-3 pt-2 border-top-0" itemProp="author" itemScope itemType="https://schema.org/Person">
          <img
            src={imageUrl + avatarUrl}
            alt={`${author.name}'s profile avatar`}
            className="rounded-circle me-3 object-fit-cover"
            width="48"
            height="48"
            loading="lazy"
          />
          <div className="text-start">
            <h4 className="h6 mb-0" itemProp="name">
              {author.name}
            </h4>
            <small className="text-muted" itemProp="datePublished" content={date}>
              {date}
            </small>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;