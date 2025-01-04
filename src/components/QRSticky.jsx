import React, { useState } from "react";
import "./QRSticky.css";
import googleQRImage from "../assets/google-qr.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";
const QRSticky = () => {
  const [displayQR, setDisplayQR] = useState(true);
  return (
    <div>
      <div className="qr-container" onClick={() => setDisplayQR(!displayQR)}>
        <div className="qr-content">
          {displayQR ? (
            <div className="qr-desktop">
              <img className="qr-image" src={googleQRImage} alt="" />
              <div>Get Chrome for your phone</div>
            </div>
          ) : (
            <CiMobile4 size={32} color={"blue"} />
          )}
        </div>
        <div>
          <div 
        //   style={
        //     { 
        //         transform: `rotate(${displayQR ? 180 : -180}deg)`, alignSelf : 'flex-start', transition : '1s', width : '32px' 
        //     }
        //     }
            >
            <MdKeyboardArrowRight size={32} color={"blue"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRSticky;
