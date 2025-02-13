import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faFacebookF } from "@fortawesome/free-brands-svg-icons";

function MyFooter() {
  return (
    <>
      <div className="footerLayout">
        <div className="contact">
          <h4>loremipsum.it</h4>
          <p>E-mail: info@example.com</p>
          <div className="footerIconLayout">
            <p>twitter</p>
            <p>linkedin</p>
          </div>
        </div>
        <div className="rights">
          <p>© 2021 Tutti i diritti risevati - Design by MM</p>
        </div>
      </div>

      <div className="footerMobile">
        <div className="contact">
          <h4>loremipsum.it</h4>
          <div className="footerBar"></div>
          <p>E-mail: info@example.com</p>
          <div className="footerIcon">
            <FontAwesomeIcon icon={faFacebookF} />

            <FontAwesomeIcon icon={faTwitter} />

            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="rights">
          <p>© 2021 Tutti i diritti risevati - Design by MM</p>
        </div>
      </div>
    </>
  );
}

export default MyFooter;
