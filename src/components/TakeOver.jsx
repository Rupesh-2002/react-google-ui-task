import React, { useRef } from "react";
import "./TakeOver.css";
import img1 from "../assets/takeover/theme.webp";
import themeUIImage1 from "../assets/takeover/theme-ui.webp";
import themeUIImage2 from "../assets/takeover/theme-ui-2.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaPaintRoller } from "react-icons/fa6";

const TakeOver = () => {
  const wordRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wordRef.current,
        start: "middle 100%",
        // markers : true
      },
    });

    tl.fromTo(
      '.letter',
      {
        y: 40,
        opacity : 0
      },
      {
        y: 0,
        stagger: 0.05,
        opacity : 1,
        delay: 0.2,
        duration: 0.2,
      }
    );
  }, {scope : wordRef});

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
          Make it
          <div className="take-over-word" ref={wordRef}>
            <div className="take-over-icon">

            <FaPaintRoller size={40} />
            </div>
            {["y", "o", "u", "r", "s"].map((letter, index) => (
              <div
                key={index}
                style={{ display: "inline-block" }}
                className="letter"
              >
                {letter}
              </div>
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
