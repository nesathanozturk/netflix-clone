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
      <Movies title="Suç Temalı Diziler" />
      <Movies title="Aksiyon Dizileri" />
      <Movies title="Gerilim Filmleri" />
      <Movies title="Macera Filmleri" />
      <Movies title="En Çok İzlenenler" />
    </div>
  );
}

export default Home;
