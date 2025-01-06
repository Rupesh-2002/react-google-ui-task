import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaPlus } from "react-icons/fa6";
const FAQQuestion = ({ title, description, number }) => {
  const [showFAQDescription, setShowFAQDescription] = useState(false);
  const descriptionRef = useRef(null);

  const iconRef = useRef(null);
  const { contextSafe } = useGSAP();
  const toggleDescription = contextSafe(() => {
    if (showFAQDescription) {
      gsap.to(descriptionRef.current, {
        height: "auto",
        paddingBottom: "2rem",
        duration: 0.3,
      });
    } else {
      gsap.to(descriptionRef.current, {
        height: 0,
        duration: 0.3,
        paddingBottom: 0,
      });
    }
  });
  const toggleIcon = () => {
    if (showFAQDescription) {
      iconRef.current.style.transform = "rotate(45deg)";
    } else {
      iconRef.current.style.transform = "rotate(0deg)";
    }
  };
  const handleClick = () => {
    setShowFAQDescription((prev) => !prev);
    toggleDescription();
    toggleIcon();
  };
  return (
    <div onClick={handleClick} className="faq-question">
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
