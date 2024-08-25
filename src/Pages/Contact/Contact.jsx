import React from "react";
import Spline from "@splinetool/react-spline";

const Contact = () => {
  return (
    <div id="contact" className="lg:h-[100vh] py-20 md:py-0 flex flex-col lg:flex-row">
      <div className=" lg:w-[100%] h-[60vh] md:h-full ">
        <Spline scene="https://prod.spline.design/dL4AfSmGcFrZe6B1/scene.splinecode" />
      </div>
      {/* <div className="lg:w-2/5 lg:pt-28 font-montserrat pl-10 lg:pl-0">
        <h3 className="text-2xl font-semibold">Get in touch</h3>
        <p className="pr-28">
          My inbox is always open! 💌 Whether you've got a burning question or
          want to drop a friendly "hello", I'm all ears!👂 Let's chat! 🎉
        </p>
        <form className="py-10 relative flex flex-col">
          <input
            class="shadow appearance-none border rounded  my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-5/6"
            id="Name"
            type="text"
            placeholder="Full Name*"
          />
          <input
            class="shadow appearance-none border rounded  my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-5/6"
            id="email"
            type="email"
            placeholder="Email*"
          ></input>
          <textarea
            class="shadow appearance-none border rounded  my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-5/6"
            id="email"
            type="text"
            placeholder="Your Message*"
            rows={3}
          ></textarea>
          <button className="absolute bottom-0 right-14 lg:right-24 w-1/2 md:w-1/4 lg:w-1/4 bg-black py-3 mt-10 rounded-md font-semibold font-montserrat text-white text-xs md:text-md ">
            Say Hello 👋
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
