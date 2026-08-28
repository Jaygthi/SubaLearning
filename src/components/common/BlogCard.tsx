import { Link } from "react-router-dom";
import "../../styles/BlogCard.css";

export interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function BlogCard({
  title,
  description,
  image,
  slug,
}: BlogCardProps) {
  return (
    <article className="blog-card h-100">

      <Link
        to={`/blogs/${slug}`}
        className="blog-card__link"
      >
        <img
          src={image}
          alt=""
          className="blog-card__image"
          loading="lazy"
        />

        <div className="blog-card__body">

          <h3 className="blog-card__title">
            {title}
          </h3>

          <p className="blog-card__description mb-0">
            {description}
          </p>

        </div>
      </Link>

    </article>
  );
}