import React, {useRef} from "react";
import './AISection.css'
import aiImage from '../assets/ai/ai.webp'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AISection = () => {
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
    <div className="ai-section">
      <div className="ai-heading">
        
        The browser
        <div>
          {['b', 'u', 'i', 'l', 't'].map((letter, index) => (
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
        <br />
        from Chrome
      </div>
      <div className="ai-content">
        <div className="ai-tag">GOOGLE AI</div>
        <div className="ai-info">
          <div className="ai-title">
            Access AI superpowers while you browse.
          </div>
          <div className="ai-text">
            Google is integrating artificial intelligence to make our products
            more useful. We use AI for features like Search, Google Translate,
            and more, and we're innovating new technologies responsibly.
          </div>
        </div>
          <img className="ai-image" src={aiImage} alt="" />
      </div>
    </div>
  );
};

export default AISection;
