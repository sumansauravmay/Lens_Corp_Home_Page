
// import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Services from './components/Services';
import WhyLens2 from './components/WhyLens2';
import Whylens from './components/whylens';

function App() {
  return (
    <div>
    <Navbar/>
    <Intro/>
    <About/>
    <Services/>
    <Whylens/>
    <WhyLens2/>
    <Blogs/>
    <Explore/>
    <br/>
    <br/>
    <Footer/>
    </div>
  );
}

export default App;
