import React from "react";
import Arrow from "../Assets/Png/Line9.png";
function Button() {
  return (
    <button className="btn">
      <p>LINKEDIN</p>
      <img src={Arrow} alt="Arrow Icon" />
    </button>
  );
}

export default Button;
