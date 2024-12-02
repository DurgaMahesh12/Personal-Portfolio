import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import quiz from './quiz.png'
import Ecommerce from './Ecomerce.png'
import Todo from './Todod.png'
import Agecal from './Agecal.png'

const Projects = () => {
  const projectData = [

    {
      title: "Project 1",
      imageUrl: Todo,
      codeLink:"https://github.com/DurgaMahesh12/React-Todo",
      liveLink: "https://set-tasklist.netlify.app/",
      description: "A React application for managing tasks and to-do lists.",
    },
    {
      title: "Project 2",
      imageUrl: Ecommerce,
      codeLink: "https://github.com/DurgaMahesh12/M-Mart",
      liveLink: "https://exploremart.netlify.app/",
      description: "A eCommerce platform enables online buying  products effortlessly.",
    },
    {
      title: "Project 3",
      imageUrl: quiz,
      codeLink: "https://github.com/DurgaMahesh12/projectsJS/tree/main/Quiz%20App",
      liveLink: "https://brainspark.netlify.app/",
      description: "A fun and interactive platform for testing knowledge through engaging quizzes.",
    },
    {
      title: "Project 4",
      imageUrl: Agecal,
      codeLink: "https://github.com/DurgaMahesh12/projectsJS/tree/main/Age%20Calculator",
      liveLink: "https://agetracker.netlify.app/",
      description: "An intuitive tool to calculate your exact age in years, months, and days.",
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-900 text-gray-100">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-500">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg p-5 bg-gray-800"
            >
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
              />
              {/* Project Content */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  {project.description}
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => window.open(project.codeLink, "_blank")}
                  className="flex-1 py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium text-sm transition-all duration-300"
                >
                  View Code
                </button>
                <button
                  onClick={() => window.open(project.liveLink, "_blank")}
                  className="flex-1 py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium text-sm transition-all duration-300"
                >
                  Live App
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 text-white bg-cyan-600 hover:bg-cyan-700 
            rounded-lg py-3 px-6 text-base font-medium transition-transform duration-300 transform 
            hover:scale-105 shadow-lg hover:shadow-cyan-500/50 cursor-pointer"
          >
            <FaArrowCircleLeft className="text-xl" />
            Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
