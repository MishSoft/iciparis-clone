import React from "react";
import Image from "next/image";
import "./Brands.css";

import avene from "../../../../public/brands/Avene-Logo.png";
import carolina from "../../../../public/brands/Carolina_Herrera_logo.svg.png";
import missoni from "../../../../public/brands/Missoni_logo.svg.png";
import calvin from "../../../../public/brands/calvin.png";
import lacoste from "../../../../public/brands/lacoste.png";
import prada from "../../../../public/brands/prada-logo-1.png";

function Brands() {
  return (
    <div className="brands-border">
      <div className="brands-wrapper">
        <Image className="brands-image" src={avene} alt="" />
        <Image className="brands-image" src={carolina} alt="" />
        <Image className="brands-image" src={missoni} alt="" />
        <Image className="brands-image" src={calvin} alt="" />
        <Image className="brands-image" src={lacoste} alt="" />
        <Image className="brands-image" src={prada} alt="" />
        <Image className="brands-image" src={avene} alt="" />
        <Image className="brands-image" src={carolina} alt="" />
        <Image className="brands-image" src={missoni} alt="" />
        <Image className="brands-image" src={calvin} alt="" />
        <Image className="brands-image" src={lacoste} alt="" />
        <Image className="brands-image" src={prada} alt="" />
      </div>
    </div>
  );
}

export default Brands;

/*
  animation : scroll 40s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 9));
    }
  }

*/
