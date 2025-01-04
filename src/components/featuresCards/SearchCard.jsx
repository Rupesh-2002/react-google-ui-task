import React, { useRef, useState } from "react";
import searchImage from "../../assets/features/search.webp";
import searchBackImage from "../../assets/features/search-back.webp";
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const SearchCard = () => {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const mainContentRef = useRef(null);
  const searchImageRef = useRef(null);
  const extraContentRef = useRef(null);
  // const [rotate, setRotate] = useState(false)
  const iconRef = useRef(null)
  const { contextSafe } = useGSAP();


  const toggleContent = contextSafe(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowExtraContent((prev) => !prev),
    });

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
            searchImageRef.current.style.display = "block";
          },
        }
      )
        .fromTo(
          mainContentRef.current,
          {
            opacity : 0,
            y : -20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
        )
        .to(
          searchImageRef.current,
          {
            opacity: 1,
            duration: 0.5,
          },
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
        "<"
      )
        .to(
          searchImageRef.current,
          {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              searchImageRef.current.style.display = "none"; // Hide main content
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
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          }
        );
    }
  });
  // const toggleIcon = (e)=>{
  //   if(!rotate){
  //      iconRef.current.style.transform = 'rotate(225deg)'
  //   }
  //   else{
  //   .style.transform = 'rotate(-225deg)'
  //   }
  //   setRotate(!rotate)
  // }
  const handleClick = ()=>{
    toggleContent()
    // toggleIcon()
  }
  return (
    <div onClick={handleClick} className="features-content__content1">
      <div
        ref={extraContentRef}
        className="features-header"
        style={{ display: "none" }}
      >
        <img className="search-back-image" src={searchBackImage} alt="" />
        <div className="features-text">
          Access a world of knowledge at your fingertips. Check the weather,
          solve math equations, and get instant search results, all contained
          inside your browser’s address bar.
        </div>
      </div>
        <div ref={mainContentRef} className="features-header">
          <div className="features-tag">GOOGLE SEARCH</div>
          <div className="features-title">
            The search bar you love, built right in.
          </div>
        </div>
        <img
          ref={searchImageRef}
          className="search-image"
          src={searchImage}
          alt=""
        />

      <button ref={iconRef} className="plus-icon">
        <FaPlus />
      </button>
    </div>
  );
};

export default SearchCard;
