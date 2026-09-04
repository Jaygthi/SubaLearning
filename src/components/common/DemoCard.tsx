import "../../styles/Eduboards.css";
import homeImage from "../../assets/images/img_mom_child.jpg";
import ContactForm from "./contactForm";
export default function DemoCard() {
  return (
    <section className="education-section" aria-labelledby="education-heading">
      <div className="container-fluid px-0">
        <div className="row g-0 align-items-stretch">
          {/* LEFT IMAGE */}
          <div className="col-12 col-lg-5">
            <div
              className="education-image"
              style={{
                backgroundImage: `url(${homeImage})`,
              }}
              role="img"
              aria-label="Student learning online with a parent"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-12 col-lg-7 bg-green">
            <div className="education-content">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
