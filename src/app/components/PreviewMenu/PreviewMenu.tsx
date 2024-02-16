import React from "react";
import "./PreviewMenu.css";

function PreviewMenu() {
  return (
    <div className="w-full h-[200px]">
      <video autoPlay muted loop>
        <source src="/iciparisvideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default PreviewMenu;
