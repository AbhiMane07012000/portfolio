import React, { useRef } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";


const Hero = () => {
  

  


  return (
    <>
      <section
        id="home"
        className="flex flex-col-reverse lg:flex-row lg:h-[100vh] bg-black py-10 md:py-0"
      >
        <div className=" h-full lg:w-1/2 flex items-center justify-center lg:h-full py-10 lg:py-0">
          <img
         
            className="-rotate-[10deg] h-1/2 w-1/2 lg:h-1/2 lg:w-1/2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 duration-300"
            src="./profile.png"
            alt=""
            
          />
        </div>

        <div className="lg:w-1/2 pl-10 py-10 lg:py-32 lg:h-full">
          <div className="flex flex-row pb-2" data-aos="fade-right" data-aos-duration="1000">
            <img className="h-10" src="./hello.gif" alt="" />
            <h2 className="pl-2 font-code font-bold self-end text-md md:text-md lg:text-md text-white">
              Hello,
            </h2>
          </div>
          <h1 data-aos="fade-right" data-aos-duration="1800" className="font-bold text-2xl  md:text-4xl lg:text-4xl pb-5 text-white font-code">
            I'm Abhijeet Mane
          </h1>
          <TypeAnimation
            
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I am into Front-end developement",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "I am into Back-end developement",
              2000,
              "I am into Full Stack developement",
              2000,
              "I am into MERN Stack development",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="font-bold text-xl md:text-2xl lg:text-2xl text-white font-code "
            repeat={Infinity}
          />
          <p data-aos="fade-right" data-aos-duration="2000" className="font-semibold text-md md:text-sm lg:text:xl text-white pt-5 pb-5 pr-10 md:pr-40 lg:pr-5 font-code">
            I focus on developing user-friendly web applications that meet the
            client's requirements, with attention to detail, scalability, and
            performance.
          </p>
          <Link to="about" smooth="true" duration={500}>
            <button data-aos="flip-up" data-aos-duration="2000" className="text-white mb-5 bg-white px-6 py-2 rounded-3xl flex flex-row ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-black animate-pulse self-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <p className="pl-3 self-center font-semibold font-code text-black">
                About Me
              </p>
            </button>
          </Link>

          <div className="pl-4 flex flex-row space-x-6">
            <a data-aos="fade-right" data-aos-duration="2000" href="">
              <FaGithub className="hover:animate-bounce text-white size-6 md:size-7"  />
            </a>
            <a data-aos="fade-right" data-aos-duration="4000" href="">
              <FaLinkedinIn
                className="hover:animate-bounce text-white size-6 md:size-7"
                
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
