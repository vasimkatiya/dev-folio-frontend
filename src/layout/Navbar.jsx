import React, { useState } from 'react'
import { TbMenu4 } from "react-icons/tb";
import '../styles/navbar.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {

    const [open, setopen] = useState(false)

    useGSAP(()=>{
        gsap.from("li",{
            y:-50,
            opacity:0,
            duration:1,
            stagger:0.2

        })
        gsap.from(".logo,.menu",{
             y:-50,
            opacity:0,
            duration:1,
        })
    })

  return (
    <header>
        <nav className='flex'>
            <div className="logo">{"</>"}</div>
            <div className="menu" onClick={()=>{
                setopen(!open);
            }}><TbMenu4 /></div>
            <ul className='f'>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>

            <ul className={open ? "show" : 's'} >
                <li onClick={()=>{
                setopen(!open);
            }}><a href="#home">home</a></li>
                <li onClick={()=>{
                setopen(!open);
            }}><a href="#about">about</a></li>
                <li onClick={()=>{
                setopen(!open);
            }}><a href="#skills">skills</a></li>
                <li onClick={()=>{
                setopen(!open);
            }}><a href="#projects">projects</a></li>
                <li onClick={()=>{
                setopen(!open);
            }}><a href="#contact">contact</a></li>
            </ul>

        </nav>
    </header>
  )
}

export default Navbar
