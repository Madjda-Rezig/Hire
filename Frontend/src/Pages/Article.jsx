import Articl from "../components/Articl/Articl";
import Popular from "../components/Popular/Popular";

export default function Article() {
  return (
    <div>
      <div className="flex justify-center justify-items-center">
        <Articl />
      </div>

      <Popular />
    </div>
  );
}
