import React, { useState } from 'react'
import { errorToast, successToast } from '../config/toast.config';
import api from '../config/axios.config';

const AboutFrom = () => {

  const [name, setname] = useState("");
  const [file, setfile] = useState(null);
  const [text, settext] = useState("");
  const [load, setload] = useState(false)


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !file || !text) {
    return errorToast("All fields are required");
  }


  const formData = new FormData();
  formData.append("name", name);
  formData.append("image", file);
  formData.append("text", text);


  try {
    setload(true);

    const res = await api.post("/about", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res.data);

    setname("");
    setfile(null);
    settext("");

    successToast("About info saved successfully.");
  } catch (error) {
    errorToast(
      successToast("about info saved successfully.")
    );
  } finally {
    setload(false);
  }
};
  return (
    <div className="about-form">
        {/* <h2>about page info</h2> */}
        <form onSubmit={handleSubmit}>
        <div className="input-handler">
          <label htmlFor="">name</label>
          <input type="text" required name='name' value={name} onChange={(e)=>setname(e.target.value)} />
          </div>
    
        <div className="input-handler">
          <label htmlFor="">upload img </label>
          <input type="file" required onChange={e=>setfile(e.target.files[0])} name='image' />
          </div>
        <div className="input-handler">
          <label htmlFor="">about you </label>
          <textarea required name="text" value={text} onChange={(e)=>settext(e.target.value)} id=""></textarea>
          </div>
          <button type="submit">{load ? "loading" : "save"}</button>
        </form>
      </div>
  )
}

export default AboutFrom
