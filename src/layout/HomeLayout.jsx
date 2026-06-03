import React from 'react'
import '../styles/homelayout.css'
import { RiCamera2Fill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const HomeLayout = ({name,profession,desc}) => {

  useGSAP(()=>{
    gsap.from("h1",{
      y:-100,
      opacity:0,
      duration:1,
    })
    gsap.from("h2,p",{
      y:100,
      opacity:0,
      duration:1
    })
  })

  return (
    < div id='home'>
      <h1>I'm {name}</h1>
      <h2>{profession}</h2>
      <p>{desc}</p>
    
    </div>
  )
}

export default HomeLayout
