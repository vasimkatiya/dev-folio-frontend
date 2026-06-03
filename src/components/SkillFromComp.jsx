import { useState } from "react";
import axios from "axios";
import '../styles/skillform.css'
import { errorToast, successToast } from "../config/toast.config";

function SkillsForm() {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const addSkill = () => {
    if (!skill.trim()) return;

    setSkills([...skills, skill.trim()]);
    setSkill("");
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/api/skills",
        { skills },
        {
          withCredentials: true,
        }
      );

      console.log(res.data);

      setSkills([]);
      successToast('skill successfully added.')
    } catch (error) {
      console.error(error);
      errorToast('failed to add skill, please click on the add button.')
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sf">
      <h2 className="">Add Skills</h2>

      <form onSubmit={handleSubmit}>
        <div className="skill-inp">
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Enter skill"
            className=""
          />

          <button
            type="button"
            onClick={addSkill}
            className="add"
          >
            Add
          </button>
        </div>

        <div className="">
          {skills.map((item, index) => (
            <div
              key={index}
              className="item-con"
            >
              <span className="item">{item}</span>

              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="x"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || skills.length === 0}
          className="sub"
        >
          {loading ? "Saving..." : "Save Skills"}
        </button>
      </form>
    </div>
  );
}

export default SkillsForm;