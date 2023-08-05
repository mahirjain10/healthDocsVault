import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../component/auth/FogotPassword";
import OtpVerification from "../component/auth/OtpVerification";

const Flip = () => {
  const history = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleContinueClick = () => {
    setIsFlipped(true);

    setTimeout(() => {
      history.push("/auth/otp-verification");
    }, 500); // Adjust the time based on your animation duration
  };

  return (
    // <div className="flex justify-center items-center h-screen">
      <div
        className={`relative w-[600px] h-[350px] transition-transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="front">
            <ForgotPassword onContinueClick={handleContinueClick} />
          </div>
          <div className="back">
            <OtpVerification />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Flip;
