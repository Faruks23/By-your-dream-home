import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = () => {
  return (
    <ul className="flex  gap-3 uppercase ">
      <li>
        <NavLink to={"/"}>By</NavLink>
      </li>
      <li>
        <NavLink to={"/sell"}>sell</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/Rent"}>Rent</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/Mortgage"}>Mortgage</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/findRealTors"}>Find Realtors</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/myHome"}>My Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/newsInsight"}>newsInsight </NavLink>
      </li>
    </ul>
  );
};

export default NavItem;