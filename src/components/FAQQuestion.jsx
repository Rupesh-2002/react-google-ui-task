import React, { useRef, useState } from "react";
import gsap from "gsap";
import { FaPlus } from "react-icons/fa6";
const FAQQuestion = ({ title, description }) => {
  const [showFAQDescription, setShowFAQDescription] = useState(false);
  const descriptionRef = useRef(null);

  const iconRef = useRef(null);

  const handleClick = () => {
    setShowFAQDescription((prev) => {
      const isExpanded = !prev;

      gsap.fromTo(
        descriptionRef.current,
        {
          height: isExpanded ? 0 : "auto",
          paddingBottom: isExpanded ? 0 : "2rem",
        },
        {
          height: isExpanded ? "auto" : 0,
          paddingBottom: isExpanded ? "2rem" : 0,
          duration: 0.3,
        }
      );

      iconRef.current.style.transform = isExpanded ? "rotate(45deg)" : "rotate(0deg)";

      return isExpanded;
    });
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
