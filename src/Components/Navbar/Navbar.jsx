import React, { useState } from 'react';



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative lg:flex justify-center items-center">
      <div className=" lg:w-[55vw]   flex justify-between items-center  lg:fixed lg:top-10  lg:shadow-3xl bg-white bg-opacity-[0.5] px-10  lg:rounded-full z-50  ">
        <a href='#home' className=''><img className='h-10 lg:h-10  my-2 z-[3]' src="./main-logo.png" alt="" /></a>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-black font-semibold font-montserrat hover:text-gray-900  ">Home</a>
          <a href="#about" className="text-black font-semibold font-montserrat hover:text-gray-900  ">About</a>
          <a href="#skill" className="text-black font-semibold font-montserrat hover:text-gray-900  ">Skill</a>
          <a href="#contact" className="text-black font-semibold font-montserrat hover:text-gray-900  ">Contact</a>
        </div>
        <div className="md:hidden">
          {
            isMenuOpen ? <button onClick={toggleMenu} className="text-black font-semibold font-montserrat hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button> : 
            <button onClick={toggleMenu} className="text-black font-semibold font-montserrat hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg></button>
          }

        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden space-y-3 bg-white bg-opacity-[0.5] py-3">
          <a href="#home" className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 " onClick={toggleMenu}>Home</a>
          <a href="#about" className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "onClick={toggleMenu}>About</a>
          <a href="#skill" className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "onClick={toggleMenu}>Skills</a>
          <a href="#contact" className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
