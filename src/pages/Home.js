import '../styles/Home.css';
import { GiCommercialAirplane } from "@react-icons/all-files/gi/GiCommercialAirplane";
import Header from '../components/header';

function Home() {
  return (
    <div>
      <Header/>
      <div className="Home">
        <div className="mainImage"><GiCommercialAirplane/></div>
      </div>
    </div>
  );
}

export default Home;
