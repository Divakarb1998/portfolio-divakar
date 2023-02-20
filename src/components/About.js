import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
          <span className="text-accent"><b>Hi</b></span>, My Name Is <span className="text-accent border-b-[3px] w-[180px] border-white-600"><b>Divakar</b></span>. I am a
            <pre>Frontend Developer. I build</pre>
            <pre>beautifull websites with React</pre>
            <pre>and Tailwind CSS.</pre>
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like HTML, 
            <pre>React.js, Bootstrap, Tailwind CSS,</pre>
            <pre>Css3,PHP and many more.</pre>
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;