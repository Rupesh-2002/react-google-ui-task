import React, { useRef } from "react";
import PasswordCard from "./SafetyCards/PasswordCard.jsx";
import SafetyCheckCard from "./SafetyCards/safetyCheckCard.jsx";
import SafeBrowsingCard from "./SafetyCards/SafeBrowsingCard.jsx";
import PrivacyGuideCard from "./SafetyCards/PrivacyGuideCard.jsx";
import './Safety.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const style = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "3rem",
};

const style1 = {
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
};
const Safety = () => {
  const lettersRef = useRef([])
  gsap.registerPlugin(ScrollTrigger)
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
    <section style={{ margin: "0 4rem" }}>
      <div className="heading">
        Stay
        <span className="heading-highlight">
          {['s', 'a', 'f', 'e'].map((letter, index) => (
            <span
              key={index}
              style={{display : 'inline-block'
              }}
              ref={(el) => (lettersRef.current[index] = el)}
            >
              {letter}
            </span>
          ))}
        </span> <br />
        while you browse
      </div>
      <div style={style}>
        <div style={style1}>
          <PasswordCard />
          <SafeBrowsingCard />
        </div>
        <div style={style1}>
          <SafetyCheckCard />
          <PrivacyGuideCard />
        </div>
      </div>
    </section>
  );
};

export default Safety;
