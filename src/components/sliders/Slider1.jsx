import React from "react";
import slideImage1 from "../../assets/sliders/slider-1.webp";
import video from "../../assets/sliders/video.webm";
import "./Sliders.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Slider1 = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".slide-1",
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".slide-1",
      {
         width : '90vw',
         y : -100,
         marginLeft : '5vw',
         x : '-15vw'
      },
      {
        y: 0,
        width : '60vw',
        marginLeft : 0,
        x : 0
      },
      0
    );

    tl.to(
      ".video",
      {
        top: "50%",
        right: "3rem",
      },
      0
    );
  });
  return (
    <div className="slide-1 slide">
      <div className="slide-content">
        <div className="slide-title">Prioritise performance</div>
        <div className="slide-text">
          Chrome is built for performance. Optimise your experience with
          features like Energy Saver and Memory Saver.
        </div>
      </div>
      <video className="video" autoPlay playsInline muted>
        <source src={video} />
      </video>
    </div>
  );
};

export default Slider1;
