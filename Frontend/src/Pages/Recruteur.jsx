import Navbarrecruteur from "../components/Navbar/Navbarrecruteur.jsx";
import Stat from "../components/Stat/Stat.jsx";
import lottie from "../assets/LOTIE.json";
import Lottie from "lottie-react";
import Pricing from "../components/Pricing/Pricing.jsx";
import FAQ from "../components/FAQ/Faq.jsx";
import AboutUs from "../components/Aboutus/Aboutus.jsx";
import Contact from "../components/Contact/Contact.jsx";
import FooterHire from "../components/Footer/Footerhire.jsx";
import Registration from "../components/Registration/Registration.jsx";
export default function Recruteur() {
  return (
    <div>
      <Navbarrecruteur />
      <Lottie animationData={lottie} />
      <Stat />
      <AboutUs />
      <Registration />
      <Pricing />
      <FAQ />
      <Contact />
      <FooterHire />
    </div>
  );
}
