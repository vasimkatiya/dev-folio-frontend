import React, { useState } from "react";
import '../styles/contact.css'
import { MdEmail } from "react-icons/md";
import { RiCamera2Fill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ContactForm({number,mail,insta,linkedin,github}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Name: ${name}
Email: ${email}
Message: ${message}
    `;

    const url = `https://wa.me/91${number}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
   <>
   <div id="contact">
    <h2>get in touch</h2>
    <div className="con-form">
       <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">Send to WhatsApp</button>
    </form>
    </div>
      <div className="email flex items-center gap-1 text-xl text-black">
        <MdEmail />
        {mail}
      </div>
      <div className="email flex items-center gap-1 text-xl text-black">
        <GrLinkedin />
        {linkedin}
      </div>
      <div className="email flex items-center gap-1 text-xl text-black">
        <FaGithubSquare />
        {github}
      </div>
      <div className="email flex items-center gap-1 text-xl text-black">
        <RiCamera2Fill />
        {insta}
      </div>
   </div>
   </>
  );
}

export default ContactForm;
