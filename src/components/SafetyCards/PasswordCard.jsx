import React, { useReducer, useRef, useState } from "react";
import "./safetyCards.css";
import passwordImage from "../../assets/safety/passwords-field.webp";
import passwordBackImage from "../../assets/safety/password-back.webp";
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PasswordCard = () => {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const extraContentRef = useRef(null);
  const mainContentRef = useRef(null);
  const passwordImageRef = useRef(null);

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
            passwordImageRef.current.style.display = "block";
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
        .fromTo(passwordImageRef.current,
          {
             opacity : 0
          },  
          {
          opacity: 1,
          duration: 0.5,
        }, "<"
      );
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
          passwordImageRef.current,
          {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              passwordImageRef.current.style.display = "none"; // Hide main content
              mainContentRef.current.style.display = "none"; // Hide main content
              extraContentRef.current.style.display = "block"; // Show extra content
            },
          },
          0
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
            duration: 1,
          }
          ,">"
        );
    }
  });
  
 
  const handleCardClick = ()=>{
    toggleContent();
    setShowExtraContent(prev => !prev)
  }
  return (
    <div onClick={handleCardClick} className="card-content password-content">
      <div
        ref={extraContentRef}
        className="card-header"
        style={{ display: "none" }}
      >
        <img className="card-back-image" src={passwordBackImage} alt="" />
        <div className="card-text">
          Chrome has Google Password Manager built in, which makes it simple to
          save, manage and protect your passwords online. It also helps you
          create stronger passwords for every account you use.
        </div>
      </div>
      <div ref={mainContentRef} className="card-header">
        <div className="card-tag">PASSWORD MANAGER</div>
        <div className="card-title">Use strong passwords on every site.</div>
      </div>
      <img
        ref={passwordImageRef}
        className="password-image"
        src={passwordImage}
        alt=""
      />

      <button className={`card-plus-icon password-plus-icon
        ${showExtraContent ? 'rotate' : ''}
        `} >
        <FaPlus size={20}/>
      </button>
    </div>
  );
};

export default PasswordCard;
