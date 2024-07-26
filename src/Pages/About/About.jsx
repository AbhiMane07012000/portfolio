import React from 'react'

const About = () => {
  return (
    <section id='about' className='flex flex-col lg:flex-row lg:h-[100vh]'>
      <div className="py-16 md:py-20 self-center px-16 md:px-28 md:w-1/2 text-left md:text-left lg:h-full ">
        <h2 className="text-xl font-extrabold pb-7 md:text-3xl ">About Me</h2>

        <p className="text-left font-medium text-sm pb-5 md:text-base">
          I have recently completed my Master's in Computer Science from
          Savtribai Phule Pune University, Pune.
        </p>
        <p className="text-left font-medium text-sm pb-5  md:text-base">
          Throughout  , I've acquired knowledge in several
          technologies, including Cloud Computing, Database Technologies, Web
          Frameworks, Advanced Operating System, Mobile Technologies
          (Android), Software Architecture & Design Patterns, Machine Learning
          and Software Project Management.
        </p>
        <p className="text-left font-medium text-sm  md:text-base">
          I've also explored frameworks like Node.js, React and Bootstrap and Tailwind CSS, all
          in a short period with a strong understanding of these concepts.
        </p>
      </div>
      <div
        className="p-7 relative self-center justify-center w-full md:w-1/2 py-24 md:py-20 bg-black h-full "
      >
        <img
          className="md:grayscale transition duration-500 ease-in-out transform hover:scale-105 hover:grayscale-0 w-100 h-[18rem] shadow-lg shadow-black  md:h-[27.6rem] md:max-w-sm md:row mx-auto  rounded-md "
          src="./Photo.jpg"
          alt="My-image"
        />
        
      </div>
    </section>
  )
}

export default About