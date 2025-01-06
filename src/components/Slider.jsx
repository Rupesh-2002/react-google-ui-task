import React, { useRef, useState } from "react";
import "./Slider.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Slider1 from "./sliders/Slider1";
import Slider2 from "./sliders/Slider2";
import Slider3 from "./sliders/Slider3";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const totalSlides = 3;
const Slider = () => {
  const wordRef = useRef(null)
  const [currSlide, setCurrSlide] = useState(1);
  const [currTranslate, setCurrTranslate] = useState(0);
  const slideContainerRef = useRef(null);

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
  const handleNextSlideClick = () => {
    let newCurrSlide = currSlide + 1;
    let newCurrTranslate = currTranslate - 65;
    setCurrSlide(newCurrSlide);
    setCurrTranslate(newCurrTranslate);
    slideContainerRef.current.style.transform = `translateX(${newCurrTranslate}vw)`;
  };
  const handlePreviousSlideClick = () => {
    let newCurrSlide = currSlide - 1;
    let newCurrTranslate = currTranslate + 65;
    setCurrSlide(newCurrSlide);
    setCurrTranslate(newCurrTranslate);
    slideContainerRef.current.style.transform = `translateX(${newCurrTranslate}vw)`;
  };
  return (
    <div className="slider-section">
      <div className="heading">
        The
        <div ref={wordRef} className="slider-word">
          {["f", "a", "s", "t"].map((letter, index) => (
            <div
              key={index}
              className="letter"
              style={{ display: "inline-block" }}
            >
              {letter}
            </div>
          ))}
        </div>
        way to do <br />
        things online
      </div>

      <div ref={slideContainerRef} className="slider-container">
        <Slider1 />
        <Slider2 />
        <Slider3 />
      </div>

      <div className="slider-controls">
        <button
          onClick={handlePreviousSlideClick}
          disabled={currSlide === 1}
          style={{
            backgroundColor: currSlide === 1 ? "#f1f3f4" : "#e8f0fe",
          }}
          className="slider-prev-icon slider-controls-icon"
        >
          <MdKeyboardArrowLeft
            size={32}
            color={currSlide === 1 ? "#80868b" : "#226cd3"}
          />
        </button>
        <button
          disabled={currSlide === totalSlides}
          onClick={handleNextSlideClick}
          style={{
            backgroundColor: currSlide === totalSlides ? "#f1f3f4" : "#e8f0fe",
          }}
          className="slider-next-icon slider-controls-icon"
        >
          <MdKeyboardArrowRight
            size={32}
            color={currSlide === totalSlides ? "#80868b" : "#226cd3"}
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
