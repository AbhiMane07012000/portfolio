import React from "react";
import {
  FaEnvelope,
  // FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="lg:h-[20vh] relative flex flex-col justify-center items-center my-5 border-t-[1px] border-slate-300  ">
        <Link
          to="home"
          smooth={true}
          offset={0}
          duration={1500}
          spy={true}
          activeClass=""
          className=" cursor-pointer font-semibold font-montserrat "
        >
          <div className="absolute bottom-1 lg:bottom-5  right-2 lg:right-10 bg-slate-400 rounded-full ">
            <svg
              width="64px"
              height="64px"
              viewBox="-24 -24 72.00 72.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              stroke-width="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-10 pt-16">
          <NavLink to="https://www.linkedin.com/in/abhijeet-mane-07012000/">
            <FaLinkedin className="text-2xl lg:text-3xl" />
          </NavLink>


          <NavLink to="https://www.instagram.com/70__abhi__07/profilecard/">
            <FaInstagram className="text-2xl lg:text-3xl" />
          </NavLink>
          
          <NavLink to="mailto:abhijeet.nitin.mane@gmail.com">
            <FaEnvelope className="text-2xl lg:text-3xl" />
          </NavLink>
        </div>
        <h4 className="py-10">Made with ❤️ by Abhijeet Mane</h4>
      </footer>
    </>
  );
};

export default Footer;
