import React, { useState } from "react";

function Bio() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="biography">
      <h2>BIOGRAPHY</h2>

      <div className={`blockText ${isExpanded ? "hidden" : ""}`}>
        <p className="textColumn">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit
          tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed
          lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula blandit
          nulla nec imperdiet.
        </p>

        <button className="btn" onClick={() => setIsExpanded(true)}>
          <p>read more</p>
        </button>
      </div>

      <div className={`blockText ${isExpanded ? "" : "hidden"}`}>
        <div className="moreText">
          <p className="textColumn">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit
            tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed
            lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula
            blandit nulla nec imperdiet. Pellentesque dapibus euismod enim feugiat sagittis. Sed ornare suscipit tellus,
            at convallis ante dapibus eget. Morbi vel augue sed dui ornare pretium eget ut urna. Vestibulum efficitur
            egestas ex nec euismod. Vestibulum non lacus ante. Aenean quis aliquet justo. Vivamus consectetur rutrum
            magna vitae semper. Nunc vitae magna lorem.
          </p>
          <p className="textColumn">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit
            tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed
            lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula
            blandit nulla nec imperdiet. Pellentesque dapibus euismod enim feugiat sagittis. Sed ornare suscipit tellus,
            at convallis ante dapibus eget. Morbi vel augue sed dui ornare pretium eget ut urna. Vestibulum efficitur
            egestas ex nec euismod. Vestibulum non lacus ante. Aenean quis aliquet justo. Vivamus consectetur rutrum
            magna vitae semper. Nunc vitae magna lorem.
          </p>
        </div>
        <button className="btn lessButton" onClick={() => setIsExpanded(false)}>
          <p>less</p>
        </button>
      </div>
    </div>
  );
}

export default Bio;
