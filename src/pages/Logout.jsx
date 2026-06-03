import React, { useEffect } from 'react'
import { errorToast, successToast } from '../config/toast.config'
import api from '../config/axios.config'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate()

    const logoutHandler = async() =>{
        try {
            await api.post('/auth/logout');

            localStorage.removeItem("token");
            localStorage.removeItem("username");

            successToast("logout sucessfully.")

        } catch (error) {
            return errorToast(error.response?.data?.message)
        }
    }
    

  return (
    <button  className="preview text-xl cursor-pointer rounded-3xl capitalize  bg-red-700 h-10 w-35 text-white" onClick={(e)=>{
        e.preventDefault();
        logoutHandler();
        navigate('/');
    }}>logout</button>
  )
}

export default Logout
