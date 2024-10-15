import React from "react";
import Image from "next/image";
import "./ourhearts.css";

const Body2 = () => {
  return (
    <div className="body2">
      <div className="text_container">
        <div className="txt1">
          At the Heart of Our Work is a deep commitment to the principles of
          blockchain technology
        </div>
        <div className="brackets-container">
          <div className="brackets">
            <Image src="/top.svg" alt="image" width="157" height="16" />
            <div className="centered-text"> Transparency</div>
            <Image src="/bottom.svg" alt="image" width="160" height="17" />
          </div>
          <div className="brackets">
            <Image src="/top.svg" alt="image" width="157" height="16" />
            <div className="centered-text"> Decentralization</div>
            <Image src="/bottom.svg" alt="image" width="160" height="17" />
          </div>
          <div className="brackets">
            <Image src="/top.svg" alt="image" width="157" height="16" />
            <div className="centered-text"> Trust</div>
            <Image src="/bottom.svg" alt="image" width="160" height="17" />
          </div>
        </div>

        <div className="line">
          <Image src="/line.png" alt="image" width="500" height="4" />
        </div>
        <div className="txt2">
          We believe that these principles have the power to transform
          industries, create new opportunities, and help to build a more
          equitable and sustainable world.
        </div>
      </div>
      <div className="p88image">
        <Image src="/p88.png" alt="image" width="1192" height="795" />
      </div>
    </div>
  );
};
export default Body2;
