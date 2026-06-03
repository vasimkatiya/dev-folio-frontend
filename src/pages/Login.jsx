import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/form.css'
import api from '../config/axios.config';
import { errorToast, successToast } from '../config/toast.config';

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [load, setload] = useState(false)

    const navigate = useNavigate();

    const handlesubmit = async ()=>{
        
        try {
            setload(true)
        if(!email || !password){
            errorToast("all fields are required.")
        }

            const res = await api.post('/auth/login',{email,password});
            
            localStorage.setItem("token",res.data.token);
            localStorage.setItem('username',res.data.username)

            setemail("");
            setpassword("");
            
            console.log(res.data);
            setload(false)

            setTimeout(() => {
            successToast(res.data.message);
            navigate('/home')
            }, 1500);



        } catch (error) {
            errorToast(error.response?.data?.message)
            setload(false)
        }
    }

  return (
      <div>
        <div className="form-con">
      <h1>Log-in</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            handlesubmit();
        }}>
            <input type="email" placeholder='email' value={email} name='email' onChange={(e)=>setemail(e.target.value)} />
            <input type="password" name='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />

            <button type="submit">{ load? "loading..." : "login" }</button>
        </form>
        <p>don't have an account <span><Link className='text-blue-950' to='/signup'>signup</Link></span></p>
      </div>
    </div>
  )
}

export default Login
