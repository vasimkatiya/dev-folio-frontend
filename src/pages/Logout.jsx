import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/axios.config";
import { successToast, errorToast } from "../config/toast.config";

const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await api.post("/auth/logout");

      localStorage.removeItem("token");
      localStorage.removeItem("username");

      successToast(res.data.message);

      navigate("/");
    } catch (error) {
      errorToast(
        error.response?.data?.message || "Logout failed"
      );
    }
  };

  return (
    <button
      className="preview text-xl cursor-pointer rounded-3xl capitalize bg-red-700 h-10 w-35 text-white"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default Logout;