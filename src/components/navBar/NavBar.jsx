import Button from "../buttons/Button";
import "./navbar.css";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <img src="/images/lebonLogo.png " width={100} alt="lebonlogo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink to="#"> Menu</NavLink>
            </li>
            <li>
              <NavLink to="#">Find Dining</NavLink>
            </li>
            <li>
              <NavLink to="#"> About</NavLink>
            </li>
            <li>
              <NavLink to="#"> Contact</NavLink>
            </li>
          </ul>
        </div>

        <Button className={"button txt-yellow"} divClass={"bt-container"} stroke={"#f5be32"}>RESERVATION</Button>
      </nav>
    </>
  );
};

export default NavBar;
