import React from "react";
import './Experience.scss';
import VerifiedIcon from "@mui/icons-material/Verified";

const data = {
  skills: {
    title: "Skills",
    skill: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "SCSS",
      "TypeScript",
      "Material UI",
      "Node.js",
      "Next.js",
      "Sequelize",
      "MongoDB",
    ],
  },
};

const Experience = () => {
  return (
    <section className="experience" id="skills">
      <h5>The skills I have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__card">
          <div className="experience__skills">
            {data.skills.skill.map((el) => (
              <div className="experience__skill">
                <VerifiedIcon color="primary"/>
                <h4>{el}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
