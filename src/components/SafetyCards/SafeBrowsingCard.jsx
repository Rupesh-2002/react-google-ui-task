import React, { useRef, useState } from "react";
import "./safetyCards.css";
import safeBrowsingBackImage from "../../assets/safety/safe-browsing-back.webp";
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SafeBrowsingCard = () => {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const extraContentRef = useRef(null);
  const mainContentRef = useRef(null);

  const { contextSafe } = useGSAP();

  const toggleContent = contextSafe(() => {
    const tl = gsap.timeline();

    if (showExtraContent) {
        // Transition to main content
      tl.fromTo(
        extraContentRef.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          onComplete: () => {
            extraContentRef.current.style.display = "none";
            mainContentRef.current.style.display = "block";
          },
        }
      )
        .fromTo(
          mainContentRef.current,
          {
            opacity: 0,
            y: -20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          }
        )
    } else {
      // Transition to extra content
      tl.fromTo(
        mainContentRef.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -20,
          duration: 0.5,
          onComplete: () => { 
            mainContentRef.current.style.display = "none"; 
            extraContentRef.current.style.display = "block"; 
          },
        },
        "<"
      )
        .fromTo(
          extraContentRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          }
        );
    }
  });
  const handleCardClick = ()=>{
    
    setShowExtraContent((prev) => !prev)
    toggleContent();
  
  }
  return (
    <div onClick={handleCardClick} className="card-content safe-browsing-content">
      <div
        ref={extraContentRef}
        className="card-header"
        style={{ display: "none" }}
      >
        <img className="card-back-image" src={safeBrowsingBackImage} alt="" />
        <div className="card-text">
        Chrome's Safe Browsing warns you about malware or phishing attacks. Turn on Enhanced Safe Browsing for even more safety protections.
        </div>
      </div>
      <div ref={mainContentRef} className="card-header">
        <div className="card-tag">ENHANCED SAFE BROWSING</div>
        <div className="card-title">Browse with the confidence that you're staying safer online.</div>
      </div>

      <button className={`card-plus-icon safe-browsing-plus-icon
      ${showExtraContent ? 'rotate': ''}
      `}>
        <FaPlus size={20}/>
      </button>
    </div>
  );
};

export default SafeBrowsingCard;
