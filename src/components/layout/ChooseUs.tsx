import WhyChooseUsCard from "../common/ChooseUsCard";
import { whyChooseUsItems } from "../../data/data_ChooseUs";

import "../../styles/ChooseUs.css";

import studentImage from "../../assets/images/img_choose_us.png";
export default function WhyChooseUs() {
  return (
    <section
      className="why-choose-us"
      aria-labelledby="why-choose-us-title"
    >
      <div className="container pt-1 mt-0">

        {/* Section Heading */}

        <header className="text-center mb-5 pb-6">
          <h2
            id="why-choose-us-title"
            className="why-choose-us-title"
          >
            Why you have to choose us
          </h2>
        </header>

        <div className="row g-5 align-items-stretch">

          {/* IMAGE */}

          <div className="col-12 col-lg-3">
            <div className="why-choose-image-wrapper">
              <img
                src={studentImage}
                alt="Student learning online"
                className="why-choose-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* CARDS */}

          {whyChooseUsItems.map((item) => (
            <div
              className="col-12 col-md-6 col-lg-3"
              key={item.id}
            >
              <WhyChooseUsCard item={item} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}