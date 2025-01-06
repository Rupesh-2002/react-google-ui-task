import React, { useRef, useState } from "react";
import "./safetyCards.css";
import privacyGuideImage from "../../assets/safety/privacy-guide.webp";
import privacyGuideBackImage from "../../assets/safety/privacy-guide-back.webp";
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PrivacyGuideCard = () => {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const extraContentRef = useRef(null);
  const mainContentRef = useRef(null);
  const privacyGuideImageRef = useRef(null);

  const { contextSafe } = useGSAP();

  const toggleContent = contextSafe(() => {
    const tl = gsap.timeline();

    if (showExtraContent) {
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
            privacyGuideImageRef.current.style.display = "block";
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
        .to(privacyGuideImageRef.current, {
          opacity: 1,
          duration: 0.5,
        });
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
        },
        "<"
      )
        .to(
          privacyGuideImageRef.current,
          {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              privacyGuideImageRef.current.style.display = "none"; // Hide main content
              mainContentRef.current.style.display = "none"; // Hide main content
              extraContentRef.current.style.display = "block"; // Show extra content
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
    toggleContent();
    setShowExtraContent(prev => !prev)
  }
  return (
    <div onClick={handleCardClick} className="card-content privacy-guide-content">
      <div
        ref={extraContentRef}
        className="card-header"
        style={{ display: "none" }}
      >
        <img className="card-back-image" src={privacyGuideBackImage} alt="" />
        <div className="card-text">
          Chrome has Google Password Manager built in, which makes it simple to
          save, manage and protect your passwords online. It also helps you
          create stronger passwords for every account you use.
        </div>
      </div>
      <div ref={mainContentRef} className="card-header">
        <div className="card-tag">PRIVACY GUIDE</div>
        <div className="card-title">Keep your privacy under your control with easy-to-use settings.</div>
      </div>
      <img
        ref={privacyGuideImageRef}
        className="privacy-guide-image"
        src={privacyGuideImage}
        alt=""
      />

      <button className={`card-plus-icon password-plus-icon
        ${showExtraContent ? 'rotate' : ''}
        `}>
        <FaPlus size={20}/>
      </button>
    </div>
  );
};

export default PrivacyGuideCard;
