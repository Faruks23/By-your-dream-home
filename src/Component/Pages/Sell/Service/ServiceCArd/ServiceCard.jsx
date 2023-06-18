import React from 'react';

const ServiceCard = ({img,title,subtitle, btnText,search,  seller ,start}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border">
      <figure className="px-10 pt-10">
        <img src={img}  className="rounded-xl" />
      </figure>
      <div className="card-body  text-left">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>
        <div className="card-actions w-full mt-5">
          {seller && (
            <button className=" py-1 capitalize text-white bg-red-500 w-full rounded-xl">
              {btnText}
            </button>
          )}
          {start && (
            <button className="capitalize outline outline-red-600 w-full rounded-xl">
              {btnText}
            </button>
          )}
          {search && (
            <div className="form-control">
              <div className="input-group  w-[300px] text-gray-900">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered  w-full"
                />
                <button className="btn  btn-circle bg-red-500">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;