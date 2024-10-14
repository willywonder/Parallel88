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
      </div>
    </div>
  );
};
export default Body2;
