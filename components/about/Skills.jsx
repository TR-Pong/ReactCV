import React from "react";

const skillsContent = [
  {
    name: "React.Js",
    skillPercent: "80",
  },
  {
    name: "Vue.Js",
    skillPercent: "80",
  },
  {
    name: "Unity",
    skillPercent: "90",
  },
  {
    name: "Photoshop",
    skillPercent: "60",
  },
  {
    name: "Cocos creator",
    skillPercent: "80",
  },
  {
    name: "Android Studio",
    skillPercent: "50",
  },
  {
    name: "Xcode",
    skillPercent: "40",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
