import Image from "next/image";
import "./home.css";

export default function Home() {
  return (
    <div className="index_container">
      <div className="navbar">
        <Image src="/a.svg" alt="image" width="234" height="26" />
        <div className="infocard">
          <div className="text1">About</div>
          <div className="text2"> Vision</div>
          <div className="text2">Team</div>
          <button className="contactbtn">Contact us</button>
        </div>
      </div>
      <div className="wordscard">
        <div className="words1">
          Building the Future of Web3 Technology in East Africa and Beyond
        </div>
        <div className="words2">
          Parallel88 is the leading blockchain engineering group in East Africa
          and one of the largest in the continent, boasting a team of 60+
          developers at our Nairobi Studios.
        </div>
        <button className="bookingbtn">Book a meeting</button>
      </div>
      
    </div>
  );
}
