import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { FiSearch } from "react-icons/fi";
import { RiMenu5Fill } from "react-icons/ri";

function Header() {
  return (
    <div className="flex items-center justify-between p-[20px]">
      <div className="text-[25px]">
        <FiSearch />
      </div>
      <a href="#">
        <Image width={150} src={logo} alt="Logo" />
      </a>
      <div className="text-[25px]">
        <RiMenu5Fill />
      </div>
    </div>
  );
}

export default Header;
