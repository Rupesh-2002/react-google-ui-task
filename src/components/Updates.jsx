import React, { useRef } from "react";
import "./Updates.css";
import updatesImage from "../assets/updates/updates-image.png";
import logo from "../assets/chromeLogo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Updates = () => {
  const lettersRef = useRef([]);
  const imgContainerRef = useRef(null);
  
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
    gsap.to(imgContainerRef.current, {
      xPercent : 60,
    scrollTrigger : {
       trigger : imgContainerRef.current,
       start : "top 90%",
    },
      duration: 1,
    });
  });
  return (
    <section className="updates-section">
      <div className="updates-heading">
        Discover the latest <br />
        <div>
          {["u", "p", "d", "a", "t", "e", "s"].map((letter, index) => (
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
        from Chrome
      </div>
      <div className="updates-content">
        <div className="content1">
          <p>UPDATES</p>
          <div className="title">
            Automatic <br />
            updates
          </div>
          <div>
            There's a new Chrome release every four weeks, making it easy to
            have the newest features and a faster, safer web browser.
          </div>
          <div className="link">
            <a href="">Learn about automatic updates</a>
          </div>
          <div className="content1-image-container">
            <img src={updatesImage} alt="" />
          </div>
        </div>
        <div className="content2">
          <p>LATEST</p>
          <div className="title">New From Chrome</div>
          <div>
            Chrome regularly updates with tools and features that make it faster
            and easier to use.
          </div>
          <div className="link">
            <a href="">Learn what’s new on Chrome</a>
          </div>
          <div ref={imgContainerRef} className="content2-image-container">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
