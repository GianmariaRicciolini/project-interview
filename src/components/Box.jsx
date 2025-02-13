import React, { useState } from "react";

function Box({ imageSrc, title, hoverContent, hoverTitle, isHoverEnabled }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="box"
      onMouseEnter={() => isHoverEnabled && setIsHovered(true)}
      onMouseLeave={() => isHoverEnabled && setIsHovered(false)}
    >
      <img src={imageSrc} alt={title} className="box-image" />
      <div className={`box-text ${isHovered ? "hidden" : ""}`}>
        <p>{title}</p>
      </div>

      {isHoverEnabled && (
        <div className={`box-hover-menu ${isHovered ? "show" : ""}`}>
          <p className="hoverTitle">{hoverTitle}</p>
          <p className="hoverContent">{hoverContent}</p>
        </div>
      )}
    </div>
  );
}

export default Box;
