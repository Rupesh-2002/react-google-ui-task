import React, { useState, useRef } from "react";
import docsImage from "../../assets/features/docs.webp";
import offlineImage from "../../assets/features/offline.webp";
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const WorkspaceCard = () => {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const mainContentRef = useRef(null);
  const docsImageRef = useRef(null);
  const extraContentRef = useRef(null);
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
            docsImageRef.current.style.display = "block";
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
        .to(docsImageRef.current, {
          opacity: 1,
          duration: 0.5,
        }, "<");
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
        0
      )
        .to(
          docsImageRef.current,
          {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              docsImageRef.current.style.display = "none"; // Hide main content
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

  const handleCardClick = () => {
    toggleContent();
    setShowExtraContent(prev =>!prev)
  };
  return (
    <div onClick={handleCardClick} className="features-content__content2">
      <div
        ref={extraContentRef}
        className="features-header"
        style={{ display: "none" }}
      >
        <img className="search-back-image" src={offlineImage} alt="" />
        <div className="features-text">
          Access a world of knowledge at your fingertips. Check the weather,
          solve math equations, and get instant search results, all contained
          inside your browser's address bar.
        </div>
      </div>
      <div ref={mainContentRef} className="features-header">
        <div className="features-tag">GOOGLE WORKSPACE</div>
        <div className="features-title">
          Get things done, with or without Wi-Fi.
        </div>
      </div>
      <img ref={docsImageRef} className="docs-image" src={docsImage} alt="" />

      <button className={`
        plus-icon ${showExtraContent ? 'rotate' : ''}
        `}>
        <FaPlus size={20} />
      </button>
    </div>
  );
};

export default WorkspaceCard;
