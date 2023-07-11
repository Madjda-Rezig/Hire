import Herohome from "../components/Hero/Herohome.jsx";
import Categorie from "../components/Categorie/Categorie.jsx";
import Faqhome from "../components/FAQ/Faqhome.jsx";
import Aboutushome from "../components/Aboutus/Aboutushome.jsx";
import Stat from "../components/Stat/Stat.jsx";

export default function Home() {
  return (
    <div>
      <Herohome />
      <Stat />
      <Aboutushome />
      <Categorie />
      <Faqhome />
    </div>
  );
}
