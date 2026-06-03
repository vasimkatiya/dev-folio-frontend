import React, { useState } from 'react'
import { errorToast, successToast } from '../config/toast.config';
import api from '../config/axios.config';

const ContactFrom = () => {

    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [instagram, setinstagram] = useState("");
    const [linkedIn, setlinkedIn] = useState("");
    const [gitHub, setgitHub] = useState("");
    const [load, setload] = useState(false)


    const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !mobile ) {
    return errorToast("All fields are required");
  }

  try {
    setload(true);

    const res = await api.post("/contact",{email,phone:mobile,instagram,linkedin : linkedIn,github : gitHub});

    console.log(res.data);

    setemail("");
    setmobile("");
    setinstagram("");
    setlinkedIn("");
    setgitHub("");

    successToast("info saved successfully.");
  } catch (error) {
    errorToast(
      error.response?.data?.message || "Something went wrong"
    );
  } finally {
    setload(false);
  }
};

  return (
    <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <div className="input-handler">
          <label htmlFor="">email</label>
          <input type="email" placeholder='example@gmail.com' required value={email} onChange={(e)=>setemail(e.target.value)} name='email' />
          </div>

          <div className="input-handler">
          <label htmlFor="">phone</label>
          <input type="text" placeholder='884xx xxxxx' value={mobile} required onChange={(e)=>setmobile(e.target.value)} name='phone' />
          </div>

          <div className="input-handler">
          <label htmlFor="">instagram</label>
          <input type="text" value={instagram} onChange={(e)=>setinstagram(e.target.value)} name='instagram' />
          </div>

          <div className="input-handler">
          <label htmlFor="">linkedIn</label>
          <input type="text" value={linkedIn} onChange={(e)=>setlinkedIn(e.target.value)} name='linkedin' />
          </div>

           <div className="input-handler">
          <label htmlFor="">github</label>
          <input type="text" value={gitHub} onChange={(e)=>setgitHub(e.target.value)} name='github' />
          </div>

        <button type="submit" className='sub'>{load ? "loading" : "save"}</button>

      </form>
    </div>
  )
}

export default ContactFrom
