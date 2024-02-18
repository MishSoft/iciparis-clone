import React from "react";
import "./PreviewMenu.css";
import Brands from "../Brands/Brands";
import NewProd from "../NewProd/NewProd";

function PreviewMenu() {
  return (
    <div>
      <div className="w-full border h-[300px]">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/iciparisvideo.mp4" type="video/mp4" />
        </video>
      </div>
      <Brands />
      <NewProd />
    </div>
  );
}

export default PreviewMenu;
