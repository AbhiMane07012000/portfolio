import React from "react";

const Projects = () => {
  return (
    <div
      id="project"
      className="md:h-full lg:h-[100vh] px-4 pt-5 lg:pt-20 lg:px-40 justify-center items-center font-code"
    >
      <h2 className="text-center font-bold text-2xl py-10 lg:py-5">Projects</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center">
        <div className="grid grid-rows-2 gap-10 md:gap-14 lg:gap-6 ">
          <div>
            <img src="./images/shopify.png" alt="shopify_img" />
          </div>
          <div>
            <img src="./images/NoteKeeper.png" alt="NoteKeeper_img" />
          </div>
        </div>

        <div className="lg:col-span-2">
          <img src="./images/chitchat.png" alt="chitchat_img" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
