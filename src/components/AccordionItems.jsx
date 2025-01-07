import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const items = [
  {
    title: "Customise your Chrome",
    description:
      "Personalise your web browser with themes, dark mode and other options built just for you.",
  },
  {
    title: "Improve Productivity",
    description:
      "Boost your efficiency with productivity-enhancing extensions and tools.",
  },
  {
    title: "Explore Extensions",
    description:
      "Discover and add powerful extensions to enhance your browser.",
  },
];
const AccordionItem = ({ setActiveIndex, activeIndex, clearAccordionInterval}) => {
  const contentRefs = useRef([]);
 
  useEffect(() => {
      const content = contentRefs.current[activeIndex];
      if (content) {
        content.style.height = `${content.scrollHeight}px`;
      }

    contentRefs.current.forEach((content, index) => {
      if (content && index !== activeIndex) {
        content.style.height = "0px";
      }
    });
  }, [activeIndex]);
  const toggleContent =(index) => {
    setActiveIndex(index);
    // clearAccordionInterval()
  };
  return (
    <div className="accordion-content-container">
      {items.map(({ title, description }, index) => {
        return (
          <div key={index} className="accordion-item-content">
            <div className="accordion-item-progress-wrapper">
              <div className="accordion-item-progress-bar"></div>
            </div>
            <div className="accordion-item-info">
              <div
                onClick={() => toggleContent(index)}
                className="accordion-item-title"
              >
                {title}
              </div>
              <div
                className={`accordion-item-description`}
                ref={(el) => (contentRefs.current[index] = el)}
              >
                {description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionItem;
