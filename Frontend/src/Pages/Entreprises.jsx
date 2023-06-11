import Pagination from "../components/Pagination/Pagination.jsx";
import HeroCompany from "../components/Herocompany/Herocompany.jsx";
import CardCompany from "../components/Cardcompany/Cardcompany.jsx";
import Parteners from "../components/Parteners/Parteners.jsx";
import Marquee from "react-fast-marquee";

export default function Entreprises() {
  return (
    <div>
      <HeroCompany />

      <CardCompany />
      <Pagination />
      <div className="">
        <h1 className="text-blue-600 text-3xl  text-center font-bold bg-blue-100 mb-7">
          Our Parteners
        </h1>
        <Marquee>
          <Parteners />
        </Marquee>
      </div>
    </div>
  );
}
