import Pagination from "../components/Pagination/Pagination.jsx";
import HeroBlogs from "../components/Heroblogs/Heroblogs.jsx";
import CardArticle from "../components/Cardarticle/Cardarticle.jsx";
export default function Blog() {
  return (
    <div>
      <HeroBlogs />
      <div className="text-5xl font-bold text-blue-600 text-center mt-5 mb-10">
        <h1>The List Of All Our Articles</h1>
      </div>
      <CardArticle />
      <CardArticle />
      <CardArticle />
      <Pagination />
    </div>
  );
}
