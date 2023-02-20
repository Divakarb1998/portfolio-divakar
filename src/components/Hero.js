import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32" id="home">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">D</span>ivakar <br />
            WebDevloper
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="flex py-5 ">
          <a
              href="https://github.com/Divakarb1998"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://instagram.com/i_divakar_bansal"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
           
            <a
              href="https://www.facebook.com/profile.php?id=100008372561112"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;