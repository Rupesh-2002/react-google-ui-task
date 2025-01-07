import React from "react";
import chromeLogo from "../assets/chromeLogo.png";
import { MdOutlineFileDownload } from "react-icons/md";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-jumplinks">
        <div className="hero-jumplinks__content">
          <ul>
            <li>
              <a href="">Updates</a>
            </li>
            <li>
              <a href="">Yours</a>
            </li>
            <li>
              <a href="">Safe</a>
            </li>
            <li>
              <a href="">Fast</a>
            </li>
            <li>
              <a href="">ByGoogle</a>
            </li>
          </ul>
          <button type="button">
            <MdOutlineFileDownload />
            <span>Download</span>
          </button>
        </div>
      </div>

      <div>
        <div className="hero__logo">
          <img src={chromeLogo} alt="" />
        </div>
        <div className="hero__text">
          The browser <br />
          built to be yours
        </div>
        <div className="hero__info">
          <button type="button">
            <MdOutlineFileDownload />
            <span>Downlaod Chrome</span>
          </button>
          <div className="hero-info__update-link">
            <a href="/">I want to update Chrome</a>
          </div>
          <p>For Windows 11/10 64-bit</p>
          <div className="hero-info__checkbox">
            <input type="checkbox" name="" id="checkbox" checked={true} readOnly/>
            <label htmlFor="checkbox">
              Help make Google Chrome better by automatically sending usage
              statistics and crash reports to Google.
              <a href="">Learn more</a>
            </label>
          </div>
          <p>
            By downloading Chrome, you agree to the Google Terms of Service and
            Chrome and ChromeOS Additional Terms of Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
