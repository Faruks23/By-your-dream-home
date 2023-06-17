import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = ({ image, title, subtitle }) => {
  return (
    <>
      <div
        className="hero md:h-[400px]"
        style={{ backgroundImage: `url(${image} )` }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" font-serif">
            <h1 className="mb-6 text-6xl font-bold">{title}</h1>
            <p className="mb-6 text-lg font-bold">{subtitle}</p>
            <div className="link mt-10">
              <ul className="flex  justify-center  font-semibold  font-serif gap-5 uppercase no-underline">
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
                  <NavLink to={"/preApproval"}>Pre-Approval</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to={"/JustSold"}>Just Sold</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to={"/HomeValue"}>Home Value</NavLink>
                </li>
              </ul>
            </div>
            <div className="search flex justify-center mt-12">
              <div className="form-control">
                <div className="input-group  w-[700px] text-gray-900">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered  w-full"
                  />
                  <button className="btn btn-square bg-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;