import React, { useRef } from "react";
import PasswordCard from "./SafetyCards/PasswordCard.jsx";
import SafetyCheckCard from "./SafetyCards/SafetyCheckCard.jsx";
import SafeBrowsingCard from "./SafetyCards/SafeBrowsingCard.jsx";
import PrivacyGuideCard from "./SafetyCards/PrivacyGuideCard.jsx";
import './Safety.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  const wordRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wordRef.current,
          start: "middle 100%",
          // markers : true
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
          stagger: 0.05,
          opacity : 1,
          delay: 0.2,
          duration: 0.2,
        }
      );
  }, {scope : wordRef});

  return (
    <section style={{ margin: "0 4rem" }}>
      <div className="heading">
        Stay
        <div ref={wordRef} className="safety-word">
          {['s', 'a', 'f', 'e'].map((letter, index) => (
            <div
              key={index}
              style={{display : 'inline-block'
              }}
              className="letter"
            >
              {letter}
            </div>
          ))}
        </div> <br />
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
