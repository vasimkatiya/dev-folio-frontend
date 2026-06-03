import React from 'react'
import '../styles/aboutlayout.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const AboutLayout = ({name,image,text}) => {

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#about",
        // markers:true,
        start:"top 50%",
        end:"top 0%",
        scrub:2
      }
    });
    
    tl.from(".first",{
      opacity:0,
      x:-200,
    },"hell")

    tl.from(".second",{
      opacity:0,
      x:200,
    },"hell")

  })

  return (
    <div id='about'>
      <div className="first">
        <img src={image} alt="" />
        <h2>{name}</h2>
      </div>
      <div className="second">
        <h4>
          {text}
        </h4>
      </div>
    </div>
  )
}

export default AboutLayout
