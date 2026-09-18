
import "../../styles/contacts.css";

import imageURL from "../../assets/images/img_contact_us.png";
export default function ContactCard() {
  return (
   
            <div className="contact-intro">

              <h1 id="contact-heading">
                Contact Us
              </h1>

              <div
                className="contact-icon"
                aria-hidden="true"
              >
                <div className="about-intro__image-wrapper">
                  <img
                    src={imageURL}
                    alt="Students participating in online learning"
                    className="about-intro__image"
                  />
                </div>
          

              </div>

            </div>

)};
