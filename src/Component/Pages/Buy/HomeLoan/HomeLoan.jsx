import React from 'react';

const HomeLoan = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10 border p-3 shadow-lg">
      <div>
        <img
          src="https://static.rdc.moveaws.com/images/hero/hp-hero-mortgage-desktop.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-sans mb-3 uppercase">
          Need a home loan? Get pre-approved
        </h1>
        <p className="font-bold font-sans">
          {" "}
          Find a lender who can offer competitive mortgage rates and help you
          with pre-approval.
        </p>
        <button className="btn bg-red-500 mt-10 rounded-xl">
          get pre-approved now
        </button>
      </div>

      <div className="flex flex-col justify-center items-start p-10">
        <h1 className="text-3xl font-bold font-sans mb-5">Get Local Info</h1>
        <p className="font-bold font-sans mb-10">
          Does it have pet-friendly rentals? How are the schools? Get important
          local information on the area you're most interested in
        </p>

        <div className="form-control">
          <div className="input-group  w-[300px] text-gray-900">
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

      <div>
        <img
          src="https://static.rdc.moveaws.com/images/hero/hp-local-desktop.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeLoan;