import Herohome from "../components/Hero/Herohome.jsx";
import Categorie from "../components/Categorie/Categorie.jsx";
import Faqhome from "../components/FAQ/Faqhome.jsx";
import Aboutushome from "../components/Aboutus/Aboutushome.jsx";

export default function Home() {
  return (
    <div>
      <Herohome />
      <Aboutushome />
      <Categorie />
      <Faqhome />
    </div>
  );
}
