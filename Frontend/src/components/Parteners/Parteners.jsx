import React from "react";
import Marquee from "react-fast-marquee";
import Logo1 from "../../assets/entreprises logo/BNP-logo.jpg";
import Logo2 from "../../assets/entreprises logo/Ericsson-logo.jpg";
import Logo3 from "../../assets/entreprises logo/KPMG-logo.jpg";
import Logo4 from "../../assets/entreprises logo/Djezzylogo.svg";

const Parteners = () => {
  return (
    <div className="h-auto">
      <Marquee
        play
        autoFill
        pauseOnHover
        speed={200}
        className="overflow-y-hidden"
      >
        <span className="inline-block h-16 w-56  bg-white">
          <img src={Logo1} alt="logo" />
        </span>
        <span className="inline-block h-16 w-56  bg-white">
          <img src={Logo2} alt="logo" />
        </span>
        <span className="inline-block h-16 w-56  bg-white">
          <img src={Logo3} alt="logo" />
        </span>
        <span className="inline-block h-16 w-56  bg-white">
          <img src={Logo4} alt="logo" />
        </span>
      </Marquee>
    </div>
  );
};

export default Parteners;
