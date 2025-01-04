import AISection from './components/AISection.jsx';
import Banner from './components/Banner.jsx';
import Extensions from './components/Extensions.jsx';
import Features from './components/Features.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import QRSticky from './components/QRSticky.jsx';
import Safety from './components/Safety.jsx';
import ScreenImages from './components/ScreenImages.jsx';
import Slider from './components/Slider.jsx';
import TakeOver from './components/TakeOver.jsx';
import Updates from './components/Updates.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';
import './index.css'
import { useEffect } from 'react';
function App() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  },[])
  return (
    <>
     <Header />
     <Hero />
     <ScreenImages />
     <Updates />
     <TakeOver />
     <Extensions />
     <Safety />
     <Slider />
     <AISection />
     <Features />
     <Banner />
     <QRSticky />
    </>
  )
}

export default App
