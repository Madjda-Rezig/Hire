import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="text-sm  breadcrumbs flex justify-center">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Offresp">Jobs</a>
        </li>
        <li className="text-blue-600">Job Description</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
