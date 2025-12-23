import { useState } from "react";
import ProjectModal from "../../Components/UI/Modals/ProjectModal";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = {
    shopify: {
      title: "Shopify",
      description:
        "🎧 Shop the coolest tech—Headphones, Earbuds, Speakers & Smartwatches.🛒 Track your cart total and checkout smoothly with Razorpay.",
      image: "./images/shopify.png",
      github: `${process.env.REACT_APP_GITHUB}/E-Commerce_WebSite`
    },
    notekeeper: {
      title: "NoteKeeper App",
      description:
        "📝 A smart note-taking app to organize your thoughts, wrapped in a fancy interactive UI with smooth animations and transitions.",
      image: "./images/NoteKeeper.png",
    },
    chitchat: {
      title: "ChitChat Messenger",
      description:
        "💬 A lightning-fast chat platform for smooth conversations.⚡ Supports instant messaging, group chats & media sharing—powered by Socket.io.",
      image: "./images/chitchat.png",
      github: `${process.env.REACT_APP_GITHUB}/Chit-Chat`,
    },
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      id="project"
      className="md:h-full lg:h-[100vh] px-4 pt-5 lg:pt-20 lg:px-40 justify-center items-center font-code"
    >
      <h2 className="text-center font-bold text-2xl py-10 lg:py-5 lg:pb-3">
        Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center relative">
        <div className="grid grid-rows-2 gap-10 md:gap-14 lg:gap-3 ">
          {/* Project 1: Shopify */}
          <div
            className="cursor-pointer transition-transform hover:scale-105 duration-300"
            onClick={() => handleOpenModal(projectData.shopify)}
          >
            <img src="./images/shopify.png" alt="shopify_img" />
          </div>

          {/* Project 2: NoteKeeper */}
          <div
            className="cursor-pointer transition-transform hover:scale-105 duration-300"
            onClick={() => handleOpenModal(projectData.notekeeper)}
          >
            <img src="./images/NoteKeeper.png" alt="NoteKeeper_img" />
          </div>
        </div>

        {/* Project 3: ChitChat */}
        <div
          className="lg:col-span-2 justify-center cursor-pointer transition-transform hover:scale-105 duration-300"
          onClick={() => handleOpenModal(projectData.chitchat)}
        >
          <img src="./images/chitchat.png" alt="chitchat_img" />
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject || {}}
      />
    </div>
  );
};

export default Projects;