import React from "react";

const Projects = () => {
  return (
    <div id="project" className="lg:h-[100vh] px-4 pt-5 lg:pt-28 lg:px-40 justify-center items-center font-code">
    <h2 className="text-center font-bold text-2xl py-10 lg:py-5">Projects</h2>
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {/* Left Column: img1 and img2 */}
        <div className="md:col-span-1 space-y-8">
          {/* Image 1 */}
          <div className="h-44 rounded-lg overflow-hidden">
            <img
              src="./images/shopify.png"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 2 */}
          <div className="h-44 rounded-lg overflow-hidden">
            <img
              src="./images/NoteKeeper.png"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: img3 */}
        <div className="md:col-span-2">
          <div className="lg:h-[28rem] overflow-hidden">
            <img
              src="./images/chitchat.png"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
