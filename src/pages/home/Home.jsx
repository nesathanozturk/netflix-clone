import "../../styles/home.scss";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedMovie from "../../components/FeaturedMovie/FeaturedMovie";
import Movies from "../../components/Movies/Movies";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <FeaturedMovie />
      <Movies />
      <Movies />
      <Movies />
      <Movies />
    </div>
  );
}

export default Home;
