import React from "react";
import side2 from "./images/side2.png";

function AboutUs() {
  return (
    <div className="back1" id="about">
      <div className="header">ABOUT US</div>
      <div className="side1">
        <p>
          Linux is the best-known and most-used open source operating system. As
          an operating system, Linux is software that sits underneath all of the
          other software on a computer, receiving requests from those programs
          and relaying these requests to the computers hardware.Linux is the
          best-known and most-used open source operating system. As an operating
          system, Linux is software that sits underneath all of the other
          software on a computer, receiving requests from those programs and
          relaying these requests to the computer hardware. Linux is the
          best-known and most-used open source operating system. As an operating
          system, Linux is software that sits underneath all of the other
          software on a computer, receiving requests from those programs and
          relaying these requests to the computers hardware.Linux is the
          best-known and most-used open source operating system. As an operating
          system, Linux is software that sits underneath all of the other
          software on a computer, receiving requests from those programs and
          relaying these requests to the computer hardware.
        </p>
      </div>
      <div className="side2">
        <img className="about" src={side2} alt="about" />
      </div>
    </div>
  );
}

export default AboutUs;
