import { set } from "mongoose";

const Pagination = ({ pages, setCurrentPage }) => {
  const aywah = [];

  for (let i = 1; i < pages + 1; i++) {
    aywah.push(
      <button
        onClick={(e) => setCurrentPage(i)}
        className="join-item btn bg-white text-blue-600 mr-1 ml-1 border-gray-200 shadow-sm"
      >
        {i}
      </button>
    );
  }

  return <div className="join flex justify-center items-center">{aywah}</div>;
};

export default Pagination;
