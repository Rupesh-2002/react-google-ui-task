import React, { useRef } from "react";
import "./Updates.css";
import updatesImage from "../assets/updates/updates-image.png";
import logo from "../assets/chromeLogo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Updates = () => {
  const wordRef = useRef(null);
  const imgContainerRef = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wordRef.current,
          start: "middle 100%",
        },
      })
    
      tl.fromTo(
        '.letter',
        {
          y: 40,
          opacity : 0
        },
        {
          y: 0,
          stagger:0.05,
          opacity : 1,
          delay: 0.2,
          duration: 0.2,
        }
      );
  },{scope : wordRef});

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
      <div className="heading">
        Discover the latest <br />
        <div ref={wordRef} className="updates-word">
          {["u", "p", "d", "a", "t", "e", "s"].map((letter, index) => (
            <div
              key={index}
              style={{display : 'inline-block'
              }}
              className="letter"
            >
              {letter}
            </div>
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
          <div style={{fontSize : '1.2rem'}}>
            There's a new Chrome release every four weeks, making it easy to
            have the newest features and a faster, safer web browser.
          </div>
          <div className="link">
            <a href="/" style={{fontSize : '1.2rem'}}>Learn about automatic updates</a>
          </div>
          <div className="content1-image-container">
            <img src={updatesImage} alt="" />
          </div>
        </div>
        <div className="content2">
          <p>LATEST</p>
          <div className="title">New From Chrome</div>
          <div style={{fontSize : '1.2rem'}}>
            Chrome regularly updates with tools and features that make it faster
            and easier to use.
          </div>
          <div className="link">
            <a href="/" style={{fontSize : '1.2rem'}}>Learn what’s new on Chrome</a>
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
