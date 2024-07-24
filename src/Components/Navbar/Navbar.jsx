import React, { useState } from 'react';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="container lg:w-[40vw] lg:mx-auto flex justify-between items-center  lg:fixed lg:top-10 lg:left-20  lg:shadow-3xl bg-black px-10  lg:rounded-full z-50 ">
        <a  href='#home' className=''><img className='h-20 lg:h-3/4 w-[5rem] z=50' src="./main-logo.jpg" alt="" /></a>
        <div className="hidden md:flex space-x-5">
          <a href="#home" className="text-white font-bold hover:text-cyan-300  ">Home</a>
          <a href="#about" className="text-white font-bold hover:text-cyan-300  ">About</a>
          <a href="#skill" className="text-white font-bold hover:text-cyan-300  ">Skill</a>
          <a href="#contact" className="text-white font-bold hover:text-cyan-300  ">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white font-bold hover:text-cyan-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden space-y-3 bg-black">
          <a href="#home" className="block text-white font-bold hover:text-cyan-300 pl-16 py-2 ">Home</a>
          <a href="#about" className="block text-white font-bold hover:text-cyan-300 pl-16 py-2 ">About</a>
          <a href="#skill" className="block text-white font-bold hover:text-cyan-300 pl-16 py-2 ">Skills</a>
          <a href="#contact" className="block text-white font-bold hover:text-cyan-300 pl-16 py-2 ">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
