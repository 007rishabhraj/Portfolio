import React from 'react';
import data from "../assets/skill.json";


const Skills = () => {
  // const animation = {
  //   whileInView: {
  //     x: 0,
  //     y: 0,
  //     opacity: 1,
  //   },

  // };
  return (
    <div id="skills">
      <h2>Skills</h2>
      <section>
        {data.languages?.map((i) => (
          <div className="skillwrapper">
            <h3>{i.name}</h3>
            <div className="progressbar">
              <div style={{ width: `${i.width}` }} ></div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Skills