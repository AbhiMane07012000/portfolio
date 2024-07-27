import React from 'react'

const About = () => {
  return (
    <section id='about' className='flex flex-col lg:flex-row lg:h-[100vh]'>
      <div className="flex flex-col justify-center   py-10 lg:px-7 w-5/6 md:w-4/5  lg:w-1/2 text-left md:text-left lg:h-full ">
        <h2 className="uppercase pl-10 md:pl-16 lg:pl-0 text-left text-xl font-extrabold pb-7 md:text-3xl ">About</h2>

        <p className="pl-10 md:pl-16 lg:pl-0 text-left font-medium text-sm pb-5 md:text-lg ">
          I have recently completed my Master's in Computer Science from
          Savtribai Phule Pune University, Pune.
        </p>
        <p className="pl-10 md:pl-16 lg:pl-0 text-left font-medium text-sm pb-5  md:text-lg">
          Throughout  , I've acquired knowledge in several
          technologies, including Cloud Computing, Database Technologies, Web
          Frameworks, Advanced Operating System, Mobile Technologies
          (Android), Software Architecture & Design Patterns, Machine Learning
          and Software Project Management.
        </p>
        <p className=" pl-10 md:pl-16 lg:pl-0 text-left font-medium text-sm pb-5  md:text-lg">
          I've also explored frameworks like Node.js, React and Bootstrap and Tailwind CSS, all
          in a short period with a strong understanding of these concepts.
        </p>
        <button className="ml-10  md:ml-16 lg:ml-0 w-1/2 md:w-1/4 lg:w-1/4  mb-5 bg-black py-2  rounded-3xl flex flex-row justify-center">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="pl-3 self-center font-semibold font-montserrat text-white text-xs md:text-md">Resume</p>
            </button>
      </div>
      
      <div
        className="flex justify-center py-10 md:py-16 lg:py-28  md:w-full lg:w-1/2  h-full "
      >
        <img
          className=" lg:m-10 self-center md:grayscale transition duration-500 ease-in-out transform  hover:scale-75 rotate-[deg] hover:rotate-3 hover:grayscale-0 w-2/5 shadow-lg shadow-black rounded-md "
          src="./Photo.jpg"
          alt="My-image"
        />
        
      </div>
    </section>
  )
}

export default About