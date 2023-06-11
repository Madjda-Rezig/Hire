import Navbarrecruteur from "../components/Navbarrecruteur/Navbarrecruteur.jsx";
import Stat from "../components/Stat/Stat.jsx";
import lottie from "../assets/LOTIE.json";
import Lottie from "lottie-react";
import Pricing from "../components/Pricing/Pricing.jsx";
import FAQ from "../components/FAQ/Faq.jsx";
import Contact from "../components/Contact/Contact.jsx";
export default function Recruteur() {
  return (
    <div>
      <Navbarrecruteur />
      <Lottie className="" animationData={lottie} />
      <Stat />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}
