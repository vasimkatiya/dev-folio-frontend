import React, { useState } from 'react'
import { errorToast, successToast } from '../config/toast.config';
import api from '../config/axios.config';

const ProjectFrom = () => {

    const [project, setproject] = useState("");
    const [tech, settech] = useState("");
    const [link, setlink] = useState("");
    const [repo, setrepo] = useState("");
    const [load, setload] = useState(false)


    const handleSubmit = async (e) => {
  e.preventDefault();

  if (!project || !tech || !link || !repo) {
    return errorToast("All fields are required");
  }

  try {
    setload(true);

    const res = await api.post("/project",{
      project_name : project,
      tech,
      link,
      github_link : repo});

    console.log(res.data);

    setproject("");
    settech("");
    setlink("");
    setrepo("")

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
    <div className='project-form'>
      <form onSubmit={handleSubmit}>
        <div className="input-handler">
          <label htmlFor="">project name</label>
          <input type="text" required value={project} onChange={(e)=>setproject(e.target.value)} name='project_name' />
          </div>

          <div className="input-handler">
          <label htmlFor="">tech used </label>
          <input type="text" required value={tech} onChange={(e)=>settech(e.target.value)} name='tech' />
          </div>

          <div className="input-handler">
          <label htmlFor="">preview link</label>
          <input type="text" value={link} onChange={(e)=>setlink(e.target.value)} name='link' />
          </div>

          <div className="input-handler">
          <label htmlFor="">github link</label>
          <input type="text" value={repo} onChange={(e)=>setrepo(e.target.value)} name='github_link' />
          </div>

        <button type="submit" className='sub'>{load ? "loading" : "save"}</button>

      </form>
    </div>
  )
}

export default ProjectFrom
