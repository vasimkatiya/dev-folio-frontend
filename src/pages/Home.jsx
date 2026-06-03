import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import SkillsForm from '../components/SkillFromComp'
import AboutFrom from '../components/AboutFrom'
import HomeFrom from '../components/HomeFrom'
import ProjectFrom from '../components/ProjectFrom'
import ContactFrom from '../components/ContactForm'
import CopyInput from '../components/CopyInput'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'


const Home = () => {

  const[username, setusername] = useState(null);
  const [gen, setgen] = useState(false)

  const navigate = useNavigate();


  useEffect(() => {
  
    let name = localStorage.getItem("username");
    
    setusername(name)
    console.log(name)
  
    return () => {
      
    }
  }, [])
  

  return (
    <main className='main flex flex-col items-center justify-between'>
      <h1 className='text-3xl '>{`welcome ${username}`}</h1>
      {/* home form section */}
      <div className="home-home flex flex-col items-center justify-center">
        <h2 className='text-2xl capitalize font-semibold'>home information</h2>
    <HomeFrom />
      </div>
      {/* about section */}

       <div className="home-home flex flex-col items-center justify-center">
        <h2 className='text-2xl capitalize font-semibold'>about information</h2>
    <AboutFrom />
      </div>

    {/* skill form  section */}

      <div className="home-home flex flex-col items-center justify-center">
        <h2 className='text-2xl capitalize font-semibold'>skills information</h2>
    <SkillsForm />
      </div>

      {/* project form section */}

        <div className="home-home flex flex-col items-center justify-center">
        <h2 className='text-2xl capitalize font-semibold'>project information</h2>
    <ProjectFrom />
      </div>

      {/* contact-form  section */}

         <div className="home-home flex flex-col items-center justify-center">
        <h2 className='text-2xl capitalize font-semibold'>contact information</h2>
    <ContactFrom />
      </div>

    <div className="genrate">
      <p>make sure all the fields are filled and all the information is correct.</p>
      <p>portfolio url is like : https://thiswebname/username</p>
      <p>after that click to <mark>generate button</mark></p>

    <button onClick={()=>setgen(true)} className="bg-violet-700  text-white capitalize sub gen" >genrate</button>
    </div>

    <div className="domain">
      {gen ? <div className='preview-box'>
                <div className="first">
                  <button className="preview text-xl cursor-pointer rounded-3xl capitalize  bg-orange-700 h-10 w-35 text-white" onClick={(e)=>{
                  e.preventDefault();
                  navigate(`/${username}`);
                }} >preview</button>
                </div>
                <div className="second">
                  <CopyInput value={`https://dev-folio83.netlify.app/${username}`} />
                </div>
            </div>
        : 'not genrated'}
    </div>
      <Logout />
    </main>
  )
}

export default Home
