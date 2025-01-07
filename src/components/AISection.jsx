import React, {useRef} from "react";
import './AISection.css'
import aiImage from '../assets/ai/ai.webp'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { VscTools } from "react-icons/vsc";

const AISection = () => {
    const wordRef = useRef(null);

  
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

  return (
    <div className="ai-section">
      <div className="heading">
        
        The browser
        <div ref={wordRef} className="ai-word">
          <div className="ai-icon">
            <VscTools />
          </div>
          {['b', 'u', 'i', 'l', 't'].map((letter, index) => (
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
