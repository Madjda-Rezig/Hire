import React from "react";
import { Link } from "react-router-dom";
const Breadcrumbs = () => {
  return (
    <div className="text-sm  breadcrumbs flex justify-center">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Offresp">Jobs</Link>
        </li>
        <li className="text-blue-600">Job Description</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
