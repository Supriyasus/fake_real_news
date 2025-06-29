import Header from "./components/Header";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/Footer";
import articles from "./data/articles";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <main className="container my-5 flex-grow-1">
        <div className="row">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
