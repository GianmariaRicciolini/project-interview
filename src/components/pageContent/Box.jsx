import React from "react";

function Box({ imageSrc, title }) {
  return (
    <div className="box">
      <img src={imageSrc} alt={title} className="box-image" />
      <div className="box-text">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Box;
