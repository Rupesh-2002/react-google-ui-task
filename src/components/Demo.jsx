import React from 'react'
import img1 from '../assets/takeover/theme.webp'
import gsap from "gsap";
import './Demo.css'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Demo = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
       gsap.to('h1', {
        scale : 0,
        scrollTrigger : {
            trigger : '.container',
            start : 'top 30%',
            // end : 'top 20',
            scrub : true,
            markers : true
        }
       })
       gsap.to('.theme-image', {
        scale : 1.5,
        scrollTrigger : {
            trigger : '.container',
            start : 'top 30%',
            // end : 'top 20',
            scrub : true,
            markers : true
        }
       })


    })
  return (
    <>

    <div className="container">
        <h1 className='h1'>Make it 
          and take it with you</h1>
    </div>
    <div className='take-over-animation--1'>
     <img src={img1} className='theme-image' alt="" />

    </div>

    </>
  )
}

export default Demo
