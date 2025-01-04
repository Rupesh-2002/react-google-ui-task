import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import "./Banner.css";
import googleQRImage from '../assets/google-qr.webp'
const Banner = () => {
  return (
    <div className="banner-section">
    <div className="banner-content">
      <div className="title">Take your browser with you</div>
      <div className="text">
        Download Chrome on your mobile device or tablet and sign into your
        account for the same browser experience, everywhere.
      </div>
      <button type="button">
        <MdOutlineFileDownload />
        <span>Download Chrome</span>
      </button>
      <div className="banner-qr">
      <img className='banner-image' src={googleQRImage} alt="" />
      <div>Get Chrome for your phone</div>
      </div>
    </div>

    </div>
  );
};

export default Banner;
