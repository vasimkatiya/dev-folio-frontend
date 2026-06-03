import { useState } from "react";
import axios from "axios";
import "../styles/skillform.css";
import { errorToast, successToast } from "../config/toast.config";

function SkillsForm() {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const addSkill = () => {
    const trimmedSkill = skill.trim();

    if (!trimmedSkill) return;

    setSkills((prev) => [...prev, trimmedSkill]);
    setSkill("");
  };

  const removeSkill = (index) => {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (skills.length === 0) {
      return errorToast("Please add at least one skill");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https:/dev-folio83.netlify.app/api/skills",
        { skills },
        {
          withCredentials: true,
        }
      );

      console.log(res.data);

      setSkills([]);
      setSkill("");

      successToast("Skills successfully added.");
    } catch (error) {
      console.error(error);

      errorToast(
        error.response?.data?.message ||
          "Failed to add skills."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sf">
      <h2>Add Skills</h2>

      <form onSubmit={handleSubmit}>
        <div className="skill-inp">
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Enter skill"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addSkill();
              }
            }}
          />

          <button
            type="button"
            onClick={addSkill}
            className="add"
          >
            Add
          </button>
        </div>

        <div>
          {skills.map((item, index) => (
            <div key={`${item}-${index}`} className="item-con">
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
          disabled={loading}
          className="sub"
        >
          {loading ? "Saving..." : "Save Skills"}
        </button>
      </form>
    </div>
  );
}

export default SkillsForm;