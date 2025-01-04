import React, {useRef} from "react";
import "./TakeOver.css";
import img1 from "../assets/takeover/theme.webp";
import themeUIImage1 from "../assets/takeover/theme-ui.webp";
import themeUIImage2 from "../assets/takeover/theme-ui-2.webp";
import gsap from "gsap";
import "./Demo.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const TakeOver = () => {
  gsap.registerPlugin(ScrollTrigger);
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


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".take-over-section",
        start: "top 20%",
        end: "top 0%",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(
      ".take-over-heading",
      {
        scale: 0.2,
        y: 100,
      },
      0
    );
    tl.to(
      ".theme-image",
      {
        scaleX: 1.3,
        scaleY: 1.3,
      },
      0
    );
  });

  return (
    <>
      <div className="take-over-section">
        <div className="take-over-heading">
          {/* Make it and <br />
          take it with you */}
          Make it 
        <div>
          {['y', 'o', 'u', 'r', "s"].map((letter, index) => (
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
        and <br />
        take it with you
        </div>
     
      <div className="take-over-animation__1">
        <img src={img1} className="animate-img theme-image" alt="" />
        {/* <div className="take-over-animation__2">
          <img
            className="animate-img theme-ui-image1"
            src={themeUIImage1}
            alt=""
          />
          <img
            className="animate-img theme-ui-image2"
            src={themeUIImage2}
            alt=""
          />
        </div> */}
      </div>
      </div>
    </>
  );
};

export default TakeOver;
