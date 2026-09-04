import ContactCard from "../../src/components/common/ContactCard";
import ContactForm from "../../src/components/common/contactForm";

export default function Contact() {

  return (
     <section
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-6">
            <ContactCard />
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )};
