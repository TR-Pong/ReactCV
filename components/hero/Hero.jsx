import React from "react";
import Social from "../Social";
import { Typewriter } from 'react-simple-typewriter'
import Image from "next/image";
const heroContent = {
  shapeImage: "./img/hero/profile.jpg",
  heroImage: "./img/hero/profile.jpg",
  name: "Tanakhom Rattanasrisawat",
  description: `I'm a Front-end Developer And Game Developer based In Thailand, over 7 years of professional experience.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <Image src={heroContent.heroImage} width={300} height={300} alt="brand" />
        </div>
        <div className="extra">
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            Hello, I&apos;m {heroContent.name}
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <Typewriter
                loop
                typeSpeed={150}
                backSpeed={60}
                words={["Web Developer", "Game Developer"]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Social />
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <a href="./img/Tanakhom CV.pdf" download className="color">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
