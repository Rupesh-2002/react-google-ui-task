import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { FaPlus } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
const FAQQuestion = ({ title, description, isActive, onClick }) => {
  const descriptionRef = useRef(null);
  const iconRef = useRef(null);

  useGSAP(() => {
    if (isActive) {
      gsap.to(descriptionRef.current, {
        height: descriptionRef.current.scrollHeight,
        paddingBottom: "2rem",
        duration: 0.3,
      });
      gsap.to(iconRef.current, { rotation: 45, duration: 0.3 });
    } else {
      gsap.to(descriptionRef.current, {
        height: 0,
        paddingBottom: 0,
        duration: 0.3,
      });
      gsap.to(iconRef.current, { rotation: 0, duration: 0.3 });
    }
  }, [isActive]);
  
  return (
    <div onClick={onClick} className="faq-question">
      <div className="faq-question-title">{title}</div>
      <div ref={descriptionRef} className="faq-question-description">
        {description}
      </div>
      <div ref={iconRef} className="faq-expand-icon">
        <FaPlus size={20} color={"#1a73e8"} />
      </div>
    </div>
  );
};

export default FAQQuestion;
