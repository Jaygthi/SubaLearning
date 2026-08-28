import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import TopBar from "../TopBar/Topbar";
import imgSubaLogo from "../../../assets/images/img_logo.png";

export default function Header() {
  return (
    <header className="shadow-sm sticky-top bg-white">
      <TopBar />
      <nav className="navbar navbar-expand-sm container px-0 py-0 m-0">

        <Link className="navbar-brand mx-4 py-0" to="/">
          <img src={imgSubaLogo} alt="Suba Online Learning" className="logo-img" />
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >
          <Navigation />

          <Link
            to="/contact"
            className="btn btn-success px-4 rounded-pill disabled"
          >
            Demo Class
          </Link>
        </div>

      </nav>
    </header>
  );
}