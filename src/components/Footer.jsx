import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 text-gray-100  shadow-inner ">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center">
        <p className="text-center text-sm md:text-base">
          &copy; {new Date().getFullYear()} Created by 
          <span className="text-cyan-500 font-bold ml-1 ">Durga Mahesh</span> 
           ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
