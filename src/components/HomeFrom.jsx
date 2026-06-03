import React, { useState } from 'react'
import '../styles/homeform.css'
import { errorToast, successToast } from '../config/toast.config';
import api from '../config/axios.config';

const HomeFrom = () => {

  const [name, setname] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = async (e)=>{

    e.preventDefault();

    if(!name || !title || !desc)
    {
      return errorToast("all fields are required");
    }

    try {
      
  const res = await api.post("/home", {
  name,
  title,
  description: desc
});

      console.log(res.data);
      setname("");
      settitle("");
      setdesc("");
      successToast("home info saved successfully.");


    } catch (error) {
      return errorToast(error.response?.data?.message)
    }
  }

  return (
    <div className="home-form">
        <form onSubmit={handleSubmit}>
          <div className="input-handler">
          <label htmlFor="">name</label>
          <input type="text" required value={name} onChange={(e)=>setname(e.target.value)} name='name' />
          </div>
          <div className="input-handler">
          <label htmlFor="">profession</label>
          <input type="text" required value={title} onChange={(e)=>settitle(e.target.value)} name='title' />
          </div>
          <div className="input-handler">
          <label htmlFor="">description</label>
          <input type="text" required value={desc} onChange={(e)=>setdesc(e.target.value)} name='description' />
          </div>
          <button type="submit">save</button>
        </form>
      </div>
  )
}

export default HomeFrom
