import { Link, NavLink } from "react-router-dom";
import NavItem from "./NavLInk/NavItem";

import './Header.css'
const Header = () => {
  return (
    <div className="nav flex items-center container mx-auto justify-between border py-2">
      <div className="logo">
        <h1 className="text-2xl font-serif font-bold uppercase">
          Dream <span className="text-red-500">HOME</span>{" "}
        </h1>
      </div>
      {/* navLink */}

      <nav className="hidden md:flex">
        <NavItem></NavItem>
      </nav>

      {/* mange rental and adv.. */}
      <div className="mange-rental">
        <Link to={"/menageRental"}>
          {" "}
          <button className="mange-btn"> Mange Rentals </button>
        </Link>
        <Link to={"/advertisement"}>
          <button className=" advertise-btn"> Advertise </button>
        </Link>
      </div>

      {/* Log in Sign up */}
      <div className="login_signUp">
        <NavLink to={"/login"}>
          {" "}
          <button className="login-btn">Log in</button>
        </NavLink>
        <NavLink to={"/signUp"}>
          <button className="signup-btn">Sign up</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;