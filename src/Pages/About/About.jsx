import React, { useRef, useEffect } from "react";

const About = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row lg:h-[100vh] py-5">
      <div className="flex flex-col justify-center   py-10 lg:px-7 w-5/6 md:w-4/5  lg:w-3/5 text-left md:text-left lg:h-full ">
        <h2 className=" pl-10 lg:pl-16 md:pl-16 text-left text-xl font-extrabold pb-7 md:text-2xl font-code ">
          About
        </h2>

        <p className="pl-10 lg:pl-16 md:pl-16 text-left font-medium text-sm pb-5  md:text-lg">
          Ahoy there! 🎉 I'm a seasoned Full-Stack developer based in Pune,
          India, proudly waving my Computer Science postgrad cape from
          SPPU! 🎓 I've delved into web development since my freshman days. 💻
          My focus lies in crafting websites and applications that seamlessly
          blend functionality. Oh, and did I mention my love for building
          full-stack Apps and side projects?💡It's kind of my thing! 🚀
        </p>
      
        <a
          href="./Abhijeet_Mane_Resume.pdf" // Replace with the actual file path
          download="Abhijeet_Mane_Resume.pdf" // Name of the file after download
          className="ml-10 md:ml-14 lg:ml-16 w-1/2 md:w-1/4 lg:w-1/4 mb-5 bg-black py-2 rounded-md flex flex-row justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="pl-3 self-center font-semibold font-montserrat text-white text-xs md:text-md">
            Resume
          </p>
        </a>
      </div>

      <div className="flex justify-center py-10 md:py-16 lg:py-28  md:w-full lg:w-1/2  h-full ">
        <img
          className="lg:m-10 self-center md:grayscale transition duration-500 ease-in-out transform rotate-3  hover:scale-95 hover:grayscale-0 w-2/5  shadow-lg shadow-black rounded-md "
          src="./images/Photo.jpg"
          alt="My-image"
        />
      </div>
    </section>
  );
};

export default About;
