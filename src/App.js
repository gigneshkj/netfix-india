
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests'


function App() {
  console.log(requests.fetchTrending)
  return (
    <div >
      <Nav/>
      <Banner fetchurl={requests.fetchNetflixOriginals} />
      <Row title="NetflixOrginal" fetchurl={requests.fetchNetflixOriginals} />
      <Row title="TopRated" fetchurl={requests.fetchTopRated} />
      <Row title="Trending" fetchurl={requests.fetchTrending} />
      <Row title="Action" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentary" fetchurl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
