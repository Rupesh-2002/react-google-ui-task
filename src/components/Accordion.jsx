import { useEffect, useState, useRef } from "react";
import "./Accordion.css";
import React from "react";
import image1 from "../assets/accordion/image1.png";
import image2 from "../assets/accordion/image2.png";
import image3 from "../assets/accordion/image3.webp";
import AccordionItems from "./AccordionItems.jsx";

const images = [image1, image2, image3];
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null)
  const totalImages = images.length;
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setActiveIndex((prevIndex) => {
        
//         console.log("Interval ID:", intervalRef.current, "Next Index:", (prevIndex + 1) % totalImages);
//         return (prevIndex + 1) % totalImages;
//       });
//     }, 3000);
//   }, []);
  const clearAccordionInterval = ()=>{
    clearInterval(intervalRef.current)
    console.log(intervalRef.current)
  }
  return (
    <div className="accordion-section">
      <div className="accordion-container">
        <div className="accordion-image-container">
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                style={{
                  opacity: `${activeIndex === index ? 1 : 0}`,
                }}
                className="accordion-image"
              />
            );
          })}
        </div>

        <AccordionItems
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        //   clearAccordionInterval={clearAccordionInterval}
        />
      </div>
    </div>
  );
};

export default Accordion;
