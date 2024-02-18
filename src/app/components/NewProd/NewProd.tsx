import React from "react";
import Image from "next/image";
import testImage from "../../../../public/13081.png";

function NewProd() {
  return (
    <div className="w-full h-[300px] flex items-center">
      <div className="w-[50%] h-full flex items-center justify-center bg-red-400">
        <Image className="w-[60%]" src={testImage} alt="" />
      </div>
      <div className="w-[50%] h-full   flex-col">
        <div className="w-full h-[50%] flex items-center justify-center bg-red-400">
          <Image className="w-[60%]" src={testImage} alt="" />
        </div>
        <div className="w-full h-[50%] flex items-center justify-center bg-red-400">
          <Image className="w-[60%]" src={testImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NewProd;
