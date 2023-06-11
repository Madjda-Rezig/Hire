import HeroJobs from "../components/Herojobs/Herojobs.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import Subscribe from "../components/Subscribe/Subscribe.jsx";
export default function Offres() {
  return (
    <div>
      <HeroJobs />
      <div className="text-5xl font-bold text-blue-600 text-center mt-5 mb-10">
        <h1>The List Of Jobs</h1>
      </div>
      <Pagination />
      <Subscribe />
    </div>
  );
}
