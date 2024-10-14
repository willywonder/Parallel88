import Image from "next/image";
import "./home.css";
import React from "react";
import Body2 from "@/Components/Body2/body2";
export default function Home() {
  const cardData = [
    { src: '/image1.svg', alt: 'image1', width: 98, height: 68, text: 'Joint Venture' },
    { src: '/image2.svg', alt: 'image2', width: 162, height: 90, text: '41+Dedicated Team' },
    { src: '/image3.svg', alt: 'image3', width: 80, height: 83, text: '350+Capacity' }
  ];

  return (
    <div className="index_container">
      <div className="navbar">
        <Image src="/a.svg" alt="image" width="234" height="26" />
        <div className="infocard">
          <div className="text1">About</div>
          <div className="text2">Vision</div>
          <div className="text2">Team</div>
          <button className="contactbtn">Contact us</button>
        </div>
      </div>
      <div className="image_wordscontainer">
        <div className="wordscard">
          <div className="words1">
            Building the Future of Web3 Technology in East Africa and Beyond
          </div>
          <div className="words2">
            Parallel88 is the leading blockchain engineering group in East
            Africa and one of the largest in the continent, boasting a team of
            60+ developers at our Nairobi Studios.
          </div>
          <button className="bookingbtn">Book a meeting</button>
        </div>
        <div className="imagecard">
          <Image src="/Frame.png" alt="image" width="914" height="600" />
        </div>
      </div>
      <div className="body">
        <div className="cards_container">
          {cardData.map((card, index) => (
            <div className="card1" key={index}>
              <Image src={card.src} alt={card.alt} width={card.width} height={card.height} />
              <div className="cardtext">{card.text}</div>
            </div>
          ))}
        </div>
      </div>
      <Body2/>

    </div>
  );
}
