import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faYoutube, faLinkedin, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="landingPage">
      <div>
        <div className="navContainer">
          <div className="sizeNav">
            <h3>loremipsum.it</h3>
            <p>
              IT<span>/EN</span>
            </p>
            <div>
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
        <div className="heroSection">
          <h1>Plans are nothing, planning is everything</h1>
          <div className="textSection">
            <div>
              <h3>Maria Rossi</h3>
              <p>
                Strategic consultant con un focus specifico rivolto a Corporate innovation, Business growth e Marketing.
              </p>
            </div>
            <button className="btn">
              <p>discover</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="mobileIcon">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
