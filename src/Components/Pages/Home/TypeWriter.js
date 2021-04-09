import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: ["Developer & Programmer",
        "MERN Stack Developer",
        "Full Stack UI/UX Expert",
        "Database Aficionado",
        "Lover of all things outdoors"],
        autoStart: true,
        loop: true,
        deleteSpeed: 15,
      }}
    />
  );
};

export default TypeWriter;
