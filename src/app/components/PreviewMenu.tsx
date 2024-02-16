import React from "react";

function PreviewMenu() {
  return (
    <div className="w-full h-[200px]">
      <video autoPlay muted className="w-full h-full">
        <source src="/iciparisvideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default PreviewMenu;
