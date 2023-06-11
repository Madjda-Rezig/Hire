import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/BNP-logo.jpg";
import Logo2 from "../../assets/Ericsson-logo.jpg";
import Logo3 from "../../assets/KPMG-logo.jpg";
const Parteners = () => {
  return (
    <div className="h-auto">
      <Marquee pauseOnHover autoFill>
        <span class="inline-block h-16 w-56  bg-white">
          <img src={Logo1} alt="logo" />
        </span>
        <span class="inline-block h-16 w-56  bg-white">
          <img src={Logo2} alt="logo" />
        </span>
        <span class="inline-block h-16 w-56  bg-white">
          <img src={Logo3} alt="logo" />
        </span>
      </Marquee>
    </div>
  );
};

export default Parteners;
