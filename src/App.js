import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import {Animated} from "react-animated-css";


function App() {
  return (
    <div className="App">
        <Header/>
        <Animated animationIn="slideInLeft" animationOut="slideInRight"  duration={2000} isVisible={false}>

        <Hero />
        </Animated>

        <Animated animationIn="fadeInLeft" animationOut="bounceIn" duration={3000}    isVisible={false}>

        <About/>
        </Animated>

        <Projects/>


        <Resume/>

        <Animated animationIn="bounceInUp" animationOut="fadeInRight" duration={5000}  isVisible={false}>

        <Contact/>
        </Animated>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
