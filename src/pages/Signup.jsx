import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/form.css'
import api from '../config/axios.config';
import { errorToast, successToast } from '../config/toast.config';

const Signup = () => {

    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [load, setload] = useState(false)

    const navigate = useNavigate();

    const handlesubmit = async ()=>{
        
        try {
            setload(true)
        if(!username ||!email || !password){
            errorToast("all fields are required.")
        }

            const res = await api.post('/auth/register',{username,email,password});
            
             setusername("");
            setemail("");
            setpassword("");
            
            console.log(res.data);
            setload(false)

            setTimeout(() => {
            successToast(res.data.message);
            }, 1500);

            navigate('/login')

        } catch (error) {
            errorToast(error.response?.data?.message)
            setload(false)
        }
    }

  return (
      <div>
        <div className="form-con">
      <h1>Signup</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            handlesubmit();
        }}>
            <input className='border-1' type="text" name='username' placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)} />
            <input type="email" placeholder='email' value={email} name='email' onChange={(e)=>setemail(e.target.value)} />
            <input type="password" name='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />

            <button type="submit">{ load? "loading..." : "sign up" }</button>
        </form>
        <p>already signup <span><Link className='text-blue-950' to='/login'>login</Link></span></p>
      </div>
    </div>
  )
}

export default Signup
