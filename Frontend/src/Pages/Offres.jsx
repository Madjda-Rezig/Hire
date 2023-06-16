import Cardjob from "../components/Card/Cardjob.jsx";
import HeroJobs from "../components/Hero/Herojobs.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import Subscribe from "../components/Subscribe/Subscribe.jsx";

export default function Offres() {
  return (
    <div>
      <HeroJobs />

      <Cardjob />
      <Pagination />
      <Subscribe />
    </div>
  );
}
