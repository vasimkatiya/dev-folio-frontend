import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { errorToast, successToast } from '../config/toast.config';
import api from '../config/axios.config';
import Navbar from '../layout/Navbar';
import HomeLayout from '../layout/HomeLayout';
import AboutLayout from '../layout/AboutLayout';
import SkillsLayout from '../layout/SkillsLayout';
import ProjectLayout from '../layout/ProjectLayout.jsx';
import ContactForm from '../layout/ContactLayout.jsx';
import Footer from '../layout/Footer.jsx';

const Portfolio = () => {

    const [data, setData] = useState(null);

    const {username} = useParams();
    

    useEffect(() => {
      console.log(username);

     async function getData(){
        try {
            const res = await api.get(`/portfolio?name=${username}`);
            console.log(res.data)
            setData(res?.data)
            
            
            
        } catch (error) {
            errorToast(error?.response?.data?.message || "something went wrong...")
        }
    }
    
    getData();

    }, [])
    
    useEffect(() => {
  console.log("Updated Data:", data);
}, [data]);

  return (
    <>
    {
      data ?
      <>
        <Navbar />
      <main>
      <HomeLayout name={data?.home?.name} profession={data?.home?.title} desc={data?.home?.description} />
      <AboutLayout name={data?.about?.name} image={data.about?.image} text={data.about?.text} />
      <SkillsLayout skills={data.skills[0]?.skills} />
      <ProjectLayout projects={data?.projects} />
      <ContactForm number={data.contact?.phone} insta={data.contact?.instagram} linkedin={data.contact?.linkedin} github={data.contact?.github} mail={data.contact?.email} />
      <Footer />
    </main> 
      </>
    :
     <h1 className='text-3xl text-center'>loading...</h1>
    }
    </>
  )
}

export default Portfolio
