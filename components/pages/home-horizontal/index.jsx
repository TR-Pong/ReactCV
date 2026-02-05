import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import HeaderHorizontal from "../../header/HeaderHorizontal";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Service from "../../service/Service";
import Portfolio from "../../portfolio/Portfolio";
import Testimonial from "../../testimonial/Testimonial";
import Blog from "../../blog/Blog";
import Contact from "../../Contact";
import Address from "../../Address";
import Map from "../../Map";
import HeaderMobile from "../../header/HeaderMobile";

const EdinaHorizontal = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div className={`home-light ${isDark ? "theme-dark" : ""}`}>
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label horizontal d-flex  ${
          isDark ? "active" : ""
        }`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>
      {/* End mobile-header */}

      <HeaderHorizontal />
      {/* End Header */}

      <Hero />
      {/* End Hero */}

      <About />
      {/* End Hero */}

      <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>What I Do</h3>
            <p>
              I create modern and
              responsive websites and games that provide an optimal user
              experience.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
          </div>
          {/* End edian_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* End Portfolio */}

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
          </div>
          <div className="extra_info">
            <Address />
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default EdinaHorizontal;
