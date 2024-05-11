
// import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import EndPage from './components/EndPage';
import Explore from './components/Explore/Explore';
import Faq from './components/FAQ/Faq';
import Footer from './components/Footer';
import Intro from './components/Intro';
import WorldMap from './components/Map/WorldMap';
import Navbar from './components/Navbar';
import Services from './components/Services';
import TotalNumber from './components/TotalNumber';
import WhyLens2 from './components/WhyLens2';
import Whylens from './components/whylens';

function App() {
  return (
    <div>
    <Navbar/>
    <Intro/>
    <About/>
    <br/>
    <br/>
    <Services/>
    <Whylens/>
    <WhyLens2/>
    <Blogs/>
    <Explore/>
    <TotalNumber/>
    <Faq/>
    <WorldMap/>
    <br/>
    <br/>
    <Footer/>
    <EndPage/>
    </div>
  );
}

export default App;
