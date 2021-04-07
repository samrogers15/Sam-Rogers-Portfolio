import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const TypeWriter = () => {
  return (
    <TypeWriterEffect
      options={{
        strings: [
          "Developer / Programmer",
          "MERN Stack Developer",
          "Full Stack UI/UX Expert",
          "Database Aficionado",
          "Lover of all things outdoors"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeWriter;
