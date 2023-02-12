import "../../styles/home.scss";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedMovie from "../../components/FeaturedMovie/FeaturedMovie";
import Movies from "../../components/Movies/Movies";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <FeaturedMovie />
      <Movies title="İzlemeye Devam Et" />
      <Movies title="Favoriler" />
      <Movies title="Aksiyon Dizileri" />
      <Movies title="Gerilim Filmleri" />
      <Movies title="Komedi Filmleri" />
      <Movies title="En Çok İzlenenler" />
      <Movies title="Belgeseller" />
    </div>
  );
}

export default Home;
