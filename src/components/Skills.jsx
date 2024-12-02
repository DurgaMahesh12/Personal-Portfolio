import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { Element } from "react-scroll";
import { FaGitAlt } from "react-icons/fa";
import { GiPegasus } from "react-icons/gi";




const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Pega", icon: <GiPegasus className="text-blue-900" /> },
   

  ];

  return (
    <>
    <Element name="skills" className="bg-gray-900 py-20">
      <div className="md:ml-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 md:mt-[80px]">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 px-6 md:px-10 mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 transform transition-transform duration-500 hover:scale-110"
            >
              <div className="text-6xl">{skill.icon}</div>
              <p className="text-xl font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
    </>
  ); 
};

export default Skills;
