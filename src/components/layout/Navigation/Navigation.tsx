import { NavLink } from "react-router-dom";
import "../../../styles/Navigation.css";

const menu = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Maths", path: "/maths" },
  { name: "Physics", path: "/physics" },
  // { name: "Tutor Enroll", path: "/tutor-enroll" },
  { name: "Contact Us", path: "/contact" }
];

export default function Navigation() {
  return (
    <ul className="navbar-nav mx-4 flex-grow-1 justify-content-center">
      {menu.map((item) => (
        <li className="nav-item" key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active-menu" : "nav-link"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}