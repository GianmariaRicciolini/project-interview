import React from "react";
import Biennale from "../Assets/Img/logo.jpg";
import Managing from "../Assets/Img/Manag.jpg";
import Politics from "../Assets/Img/polAndJourn.jpg";
import Editing from "../Assets/Img/editing.jpg";
import Strategic from "../Assets/Img/strategic.jpg";
import StratUp from "../Assets/Img/startUP.jpg";

import Box from "./Box";

function Expertise() {
  return (
    <div className="expertise-container">
      <h2>EXPERTISE</h2>

      <div className="expertise-row">
        <Box
          imageSrc={Biennale}
          title="Art Curator"
          hoverTitle="2020-22"
          hoverContent="Founder, art director, exhibition coordinator, Director of the Contemporary Art Institute of Lisbon, Portugal, and curator for the Scandinavian Pavilion at the 2023 Venice Art Biennale."
          isHoverEnabled={true}
        />
        <Box imageSrc={Managing} title="Managing" />
        <Box imageSrc={Politics} title="Politics and Journalism" />
      </div>
      <div className="expertise-row">
        <Box imageSrc={Editing} title="Editing and Writing" />
        <Box imageSrc={Strategic} title="Strategic Consultancy" />
        <Box imageSrc={StratUp} title="Start-Up" />
      </div>
    </div>
  );
}

export default Expertise;
