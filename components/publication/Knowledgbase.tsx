import React from "react";

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        eDC Knowledgebase.
        <br />
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src="/static/doodles/skills/laptop.svg"
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src="/static/doodles/skills/youtube.svg"
        />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h2>
      <div className="w-full md:w-2/3 mt-5">
        <a href="https://edciitd.notion.site/" target="_blank" rel="noreferrer">
          <img 
            src="/static/startup/Screenshot 2024-08-30 190220.png" 
            alt="Design portfolio showcase" 
            className="w-50 h-auto object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
          />
        </a>
      </div>
    </div>
  );
}

export default Skills;
