import React, { useRef, useState } from "react";
import "./safetyCards.css";
import safetyCheckBackImage from "../../assets/safety/safety-check-back.webp";
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SafetyCheckCard = () => {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const extraContentRef = useRef(null);
  const mainContentRef = useRef(null);

  const { contextSafe } = useGSAP();

  const toggleContent = contextSafe(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowExtraContent((prev) => !prev),
    });

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
  return (
    <div onClick={toggleContent} className="card-content safety-check-content">
      <div
        ref={extraContentRef}
        className="card-header"
        style={{ display: "none" }}
      >
        <img className="card-back-image" src={safetyCheckBackImage} alt="" />
        <div className="card-text">
          Chrome has Google Password Manager built in, which makes it simple to
          save, manage and protect your passwords online. It also helps you
          create stronger passwords for every account you use.
        </div>
      </div>
      <div ref={mainContentRef} className="card-header">
        <div className="card-tag">SAFETY CHECK</div>
        <div className="card-title">Check your safety level in real time with just one click.</div>
      </div>

      <button className="card-plus-icon safety-check-plus-icon">
        <FaPlus />
      </button>
    </div>
  );
};

export default SafetyCheckCard;
