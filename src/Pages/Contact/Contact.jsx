import React from "react";
import Spline from "@splinetool/react-spline";

const Contact = () => {
  return (
    <div id="contact" className="h-[100vh] flex flex-col lg:flex-row">
      <div className=" lg:w-3/6 h-full  lg:h-full">
        <Spline  scene="https://prod.spline.design/dL4AfSmGcFrZe6B1/scene.splinecode" />
      </div>
      <div>
        <h1>Form</h1>
      </div>
    </div>
  );
};

export default Contact;
