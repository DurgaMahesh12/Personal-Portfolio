import React, { useState, useMemo } from "react";
import { Element } from "react-scroll";
import dev from './Dev1.jpg';

const Home = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    { text: "Hello, I'am Durga Mahesh", color: "text-cyan-400" },
    { text: "I'am a Frontend Developer", color: "text-cyan-400" },
    { text: "I'am a Programmer", color: "text-cyan-400" },
    { text: "I'am a ReactJS Developer", color: "text-cyan-400" },
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useMemo(() => {
    const typingSpeed = 100;
    const pauseDuration = 800;

    const typePhrase = () => {
      if (charIndex < phrases[phraseIndex].text.length) {
        setCurrentPhrase((prev) => prev + phrases[phraseIndex].text[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentPhrase("");
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, pauseDuration);
      }
    };

    const timeoutId = setTimeout(typePhrase, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [charIndex, phraseIndex, phrases]);

  return (
    <Element
      name="home"
      spy={true}
      className="bg-gray-900 text-white flex flex-col md:flex-row w-full justify-between items-center gap-10 p-10 md:p-20 mt-[40px]"
    >
    
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start">
        <h1
          className={`font-bold text-3xl md:text-4xl transition-all duration-500 ${phrases[phraseIndex].color}`}
        >
          {currentPhrase}
          <span className="animate-blink"></span>
        </h1>
        <p className="text-sm md:text-2xl leading-relaxed mt-4 text-gray-300">
          Seeking a stimulating and challenging environment as a beginner, where I can leverage my technical
          and communication skills to succeed. My goal is to contribute to organizational development and
          growth while continuously advancing my career.
        </p>

        <div className="mt-5 md:mt-10 flex gap-4">
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1-V1_DaKj8W2GSlj5Wej7He7aepQKz661/view?usp=sharing",
                "_blank"
              )
            }
            className="py-2 px-3 text-white md:text-lg md:py-3 md:px-6 
            hover:bg-cyan-600 hover:scale-105 transform duration-300 font-semibold rounded-3xl bg-cyan-800"
          >
            View Resume
          </button>
        </div>
      </div>

     
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={dev}
          alt="Developer"
          className="rounded-lg shadow-lg max-w-full h-auto object-cover"
        />
      </div>
    </Element>
  );
};

export default Home;
