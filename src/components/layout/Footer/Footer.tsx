import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "react-bootstrap-icons";

import "../../../styles/Footer.css";
import imgSubaLogo from "../../../assets/images/img_logo.png";

const quickLinks = [
  { label: "About us", path: "/about" },
  { label: "Maths", path: "/maths" },
  { label: "Physics", path: "/physics" },
  // { label: "Tutor Enroll", path: "/tutor-enroll" },
  { label: "Contact Us", path: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook,
    className: "footer-social-facebook",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: Twitter,
    className: "footer-social-twitter",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: Youtube,
    className: "footer-social-youtube",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
    className: "footer-social-linkedin",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row g-4 g-lg-5">

          {/* Brand / About */}
          <div className="col-12 col-lg-6">
            <div className="footer-brand-section">

              <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3">
                <Link
                  to="/"
                  className="footer-logo-link flex-shrink-0"
                  aria-label="SUBA Online Learning home"
                >
                  <img
                    src={imgSubaLogo}
                    alt="SUBA Online Learning"
                    className="footer-logo"
                    loading="lazy"
                  />
                </Link>

                <div>
                  <h2 className="footer-heading mb-3">
                    Turning Challenges into Learning Opportunities
                  </h2>

                  <p className="footer-description mb-0">
                    We strive to make online learning simple, engaging,
                    and effective. Our mission is to guide every student
                    past the hurdles they face, turning challenges into
                    opportunities to learn and grow. With the right support,
                    every learner can achieve their full potential —
                    and we’re here to make that happen.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-sm-6 col-lg-2">
            <nav
              className="footer-links"
              aria-labelledby="footer-quick-links"
            >
              <h2
                id="footer-quick-links"
                className="footer-column-title"
              >
                Quick Links
              </h2>

              <ul className="list-unstyled mb-0">
                {quickLinks.map((item) => (
                  <li key={item.path} className="mb-3">
                    <Link
                      to={item.path}
                      className="footer-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social + Contact */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="footer-contact">

              <h2 className="footer-column-title">
                LET’S BE FRIENDS
              </h2>

              {/* Social media */}
              <div
                className="d-flex flex-wrap gap-2 mb-4"
                aria-label="Social media links"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`footer-social ${social.className}`}
                      aria-label={`Visit our ${social.label} page`}
                    >
                      <Icon
                        size={26}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>

              {/* Contact */}
              <div className="footer-contact-details text-left">
                <h3 className="footer-contact-title">
                  CONTACT US
                </h3>

                <a
                  href="tel:+918800442358"
                  className="footer-contact-link"
                >
                  +91-824 869 5890
                </a>

                <a
                  href="mailto:subavel2002@gmail.com"
                  className="footer-contact-link"
                >
                  subavel2002@gmail.com
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="text-center py-3">
            <small>
              © {new Date().getFullYear()} SUBA Online Learning. All
              rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
///////

// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-white py-5">
//       <div className="container">

//         <div className="row">

//           <div className="col-md-4">
//             <h4>SUBA Online Learning</h4>
//             <p>
//               Quality education through experienced tutors.
//             </p>
//           </div>

//           <div className="col-md-4">
//             <h5>Quick Links</h5>

//             <ul className="list-unstyled">

//               <li><Link to="/">Home</Link></li>

//               <li><Link to="/about">About</Link></li>

//               <li><Link to="/contact">Contact</Link></li>

//             </ul>
//           </div>

//           <div className="col-md-4">
//             <h5>Follow Us</h5>

//             <i className="bi bi-facebook me-3"></i>

//             <i className="bi bi-instagram me-3"></i>

//             <i className="bi bi-youtube"></i>

//           </div>

//         </div>

//         <hr />

//         <p className="text-center mb-0">
//           © 2026 SUBA Online Learning.
//         </p>

//       </div>
//     </footer>
//   );
// }