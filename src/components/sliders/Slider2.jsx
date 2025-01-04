import React from "react";
import slideImage1 from "../../assets/sliders/slider-1.webp";
import './Sliders.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Slider2 = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : '.slide-2',
                start : 'top 40%',
                end : 'top 30%',
                scrub : true,
                // markers : true
            }
        })

        tl.to('.slide-2', {
            x : 0,
            y : 0
        },0)

    })
  return (
    <div className="slide-2 slide">
      <div className="slide-content">
        <div className="slide-title">Prioritise performance</div>
        <div className="slide-text">
          Chrome is built for performance. Optimise your experience with
          features like Energy Saver and Memory Saver.
        </div>
      </div>
        <img className="slide-image" src={slideImage1} alt="" />
    </div>
  );
};

export default Slider2;