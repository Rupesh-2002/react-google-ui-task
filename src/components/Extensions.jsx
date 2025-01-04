import React, { useRef } from "react";
import extensionsImg from "../assets/extensions/extensions-img.png";
import extensionsIcon from "../assets/extensions/extensions-icon.png";
import extensionsPaint from "../assets/extensions/extensions-paint.png";
import extensionsPerson from "../assets/extensions/extensions-Person.png";
import extensionsShop from "../assets/extensions/extensions-shop.png";
import extensionsVideo from "../assets/extensions/extensions-video.png";
import "./Extensions.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const afterAnimationCss = [
  {
    top: 0,
    right: "20%",
  },
  {
    left: "20%",
    bottom: 0,
  },
  {
    bottom: "10%",
    right: "25%",
  },
  {
    left: "5%",
    top: "30%",
  },
  {
    top: "40%",
    right: "5%",
  },
];
const beforeAnimationCss = [
  {
    top: "-100px",
    right: "10%",
  },
  {
    bottom: "-15%",
    left: '-10%',
  },
  {
    right: "-10%",
    bottom: "-5%",
  },
  {
    left: "-10%",
    top: "20%",
  },
  {
    right: "-20%",
    top: "40%",
  },
];
const Extensions = () => {
  const imgRefs = useRef([]);
  const imgContainerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgContainerRef.current,
        scrub: true,
        // markers: true,
        start: "top 70%",
        end: "top 40%",
      },
    });

    imgRefs.current.forEach((el, index) => {
      tl.from(
        el,
        {
          opacity: 0,
        },
        0
      );
      tl.to(
        el,
        {
          ...afterAnimationCss[index],
          opacity: 1,
        },
        0
      );
    });

    imgRefs.current.forEach((el, index) => {
      gsap.from(el, {
        ...afterAnimationCss[index],
        opacity: 1,
      });
      gsap.to(
        el,
        {
          ...beforeAnimationCss[index], 
          opacity: 0, 
          scrollTrigger: {
            trigger: imgContainerRef.current, 
            scrub: true,
            start: "top 0%", 
            end: "top -50%", 
          },
        },
        0
      );
    });
  });
    
  return (
    <section className="extensions-section">
      <div className="extensions-content">
        <div className="extensions-content__content1">
          <h1>
            Extend your <br />
            experience
          </h1>
          <p>
            From shopping and entertainment to productivity, find extensions to
            improve your experience in the Chrome Web Store.
          </p>
          <button>Explore Extensions</button>
        </div>
        <div className="extensions-content__content2">
          <div ref={imgContainerRef} className="extensions-image-container">
            <img className="main-image" src={extensionsImg} alt="" />
            <img
              ref={(el) => (imgRefs.current[0] = el)}
              className="extensions-icon"
              src={extensionsIcon}
              alt=""
            />
            <img
              ref={(el) => (imgRefs.current[1] = el)}
              className="extensions-person"
              src={extensionsPerson}
              alt=""
            />
            <img
              ref={(el) => (imgRefs.current[2] = el)}
              className="extensions-paint"
              src={extensionsPaint}
              alt=""
            />
            <img
              ref={(el) => (imgRefs.current[3] = el)}
              className="extensions-shop"
              src={extensionsShop}
              alt=""
            />
            <img
              ref={(el) => (imgRefs.current[4] = el)}
              className="extensions-video"
              src={extensionsVideo}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extensions;
