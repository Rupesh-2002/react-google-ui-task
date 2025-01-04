import React, { useRef } from 'react'
import img1 from '../assets/screenImages/img1.webp'
import img2 from '../assets/screenImages/img2.webp'
import img3 from '../assets/screenImages/img3.webp'
import img4 from '../assets/screenImages/img4.webp'
import img5 from '../assets/screenImages/img5.webp'
import './ScreenImages.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const imgClassNames = ['img1', 'img2', 'img3', 'img4', 'img5']
const imgAnimations = [
  {
  x : 0,
  y : 0
},
{
  y : 0
},
{
  scaleX : '1'
},
{
  y : 0,
  x : 0, 
  scale : 1
}
]
const ScreenImages = () => {
  const imgContainerRef = useRef(null)
  const imageRefs = useRef([])
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imgContainerRef.current,
          start: 'top 100%',
          end: 'top 50%',
          scrub: true,
        },
      });
  
      imageRefs.current.forEach((el, index) => {
        tl.to(el, {
          ...imgAnimations[index],
        } ,0);
      });
  })

  useGSAP(()=>{
    gsap.to(imgContainerRef.current, {
            x : -200,
            scrollTrigger: {
              trigger: imgContainerRef.current,
              start: 'top 50%',
              end: 'bottom top',
              scrub: true,
            },
          });
  })
  return (
    <section className='images-section'>
      <div ref={imgContainerRef} className='image-container'>
        {
            [img1, img2, img3, img4, img5].map((img, index)=>{
                 return <img 
                    src={img}
                    ref = {(el)=>imageRefs.current[index] = el}
                    alt=""
                    className={imgClassNames[index]}
                 />
            })
        }
        {/* {

        }
        <img src={img1} alt="" className='img1'/>
        <img src={img2} alt="" className='img2'/>
        <img src={img3} alt="" className='img3' />
        <img src={img4} alt="" className='img4'/>
        <img src={img5} alt="" className='img5'/> */}
      </div>
     </section>
  )
}

export default ScreenImages
