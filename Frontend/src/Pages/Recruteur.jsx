import Stat from "../components/Stat/Stat.jsx";
import lottie from "../assets/LOTIE.json";
import Lottie from "lottie-react";
import Pricing from "../components/Pricing/Pricing.jsx";
import FAQ from "../components/FAQ/Faq.jsx";
import AboutUs from "../components/Aboutus/Aboutus.jsx";
import Contact from "../components/Contact/Contact.jsx";

import Registration from "../components/Registration/Registration.jsx";

export default function Recruteur() {
  return (
    <div>
      <Lottie animationData={lottie} />
      <Stat />
      <AboutUs />
      <Registration />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}
