import React from "react";
import slideImage1 from "../../assets/sliders/slider-1.webp";
import video from '../../assets/sliders/video.webm'
import './Sliders.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Slider1 = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : '.slide-1',
                start : 'top 20%',
                end : 'top 0%',
                scrub : true,
                // markers : true
            }
        })

        tl.to('.slide-1', {
            scale : 1,
            y : 0
        },0)

        tl.to('.video', {
            top : '50%',
            right : '3rem'
        },0)
    })
  return (
    <div className="slide-1 slide">
      <div className="slide-content">
        <div className="slide-title">Prioritise performance</div>
        <div className="slide-text">
          Chrome is built for performance. Optimise your experience with
          features like Energy Saver and Memory Saver.
        </div>
      </div>
        <video className="video" autoPlay={true}>
            <source src={video}/>
        </video>
    </div>
  );
};

export default Slider1;
