import "../../styles/home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Category title="İzlemeye Devam Et" />
      <Category title="Suç Temalı Diziler" />
      <Category title="Aksiyon Dizileri" />
      <Category title="Gerilim Filmleri" />
      <Category title="Macera Filmleri" />
      <Category title="En Çok İzlenenler" />
    </div>
  );
}

export default Home;
