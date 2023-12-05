import "./Home.css";
import { SearchProvider } from "../../context";
import { Search, TodoCards, Footer } from "../../components";

export const Home = () => {
  return (
    <SearchProvider>
      <div className="container">
        <Search />
        <TodoCards />
        <Footer />
      </div>
    </SearchProvider>
  );
};
