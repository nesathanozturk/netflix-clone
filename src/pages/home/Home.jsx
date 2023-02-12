import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import FeaturedMovie from "../../components/FeaturedMovie/FeaturedMovie";
import List from "../../components/list/List";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <FeaturedMovie />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
