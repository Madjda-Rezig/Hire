import Pagination from "../components/Pagination/Pagination.jsx";
import HeroBlogs from "../components/Hero/Heroblogs.jsx";
import CardArticle from "../components/Card/Cardarticle.jsx";
import Popular from "../components/Popular/Popular.jsx";
export default function Blog() {
  return (
    <div>
      <HeroBlogs />
      <CardArticle />
      <Pagination />
      <Popular />
    </div>
  );
}
