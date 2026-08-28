import SectionHeader from "../common/SectionHeader";
import BlogCard from "../common/BlogCard";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface BlogSectionProps {
  title: string;
  blogs: Blog[];
}

export default function BlogSection({ title,
  blogs,
}: BlogSectionProps) {
  return (
    <section className="blog-section py-5">
      <div className="container">

        <SectionHeader title={title} />

        <div className="row g-4 justify-content-center">

          {blogs.map((blog) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={blog.id}
            >
              <BlogCard {...blog} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}