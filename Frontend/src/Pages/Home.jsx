import { toast } from "react-toastify";

import Herohome from "../components/Herohome/Herohome.jsx";
import Categorie from "../components/Categorie/Categorie.jsx";

export default function Home() {
  return (
    <div>
      <Herohome />
      <Categorie />
    </div>
  );
}
