import React, {useRef} from "react";
import './Slider.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Slider1 from "./sliders/Slider1";
import Slider2 from "./sliders/Slider2";
import Slider3 from "./sliders/Slider3";
const Slider = () => {
  const lettersRef = useRef([]);

  
  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: lettersRef.current[0],
          start: "middle 100%",
        },
      })
    
    tl.from(lettersRef.current, {
        y:(index)=> 5 + index, 
        opacity: 0,
        stagger: (index) => 0.05 + index * 0.1, 
        duration: 0.5, 
        ease: "power4.out", 
        delay: 0.5, 
      })
      tl.to(lettersRef.current, {
      y: 0,
      opacity: 1,
      ease: "elastic.out(1, 0.75)",
      duration: 1,
    });
  });

   
  return (
    <div className="slider-section">
    <div className="slider-heading">
         The 
        <div>
          {['f', 'a', 's', 't'].map((letter, index) => (
            <span
              key={index}
              style={{display : 'inline-block'
              }}
              ref={(el) => (lettersRef.current[index] = el)}
            >
              {letter}
            </span>
          ))}
        </div>
        way to do <br />
        things online
      </div>

   <div className="slider-container">

       <Slider1 />
       <Slider2 />
       <Slider3 />
   </div>
    </div>
  );
};

export default Slider;
