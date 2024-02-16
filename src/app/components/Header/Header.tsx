import React from "react";
import "./Header.css";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { FiSearch } from "react-icons/fi";
import { RiMenu5Fill } from "react-icons/ri";

function Header({ handleSearch }: any) {
  return (
    <div className="header">
      <div onClick={() => handleSearch(true)} className="icons-Size">
        <FiSearch />
      </div>
      <a href="#">
        <Image className="logo-image" src={logo} alt="Logo" />
      </a>
      <div className="icons-Size">
        <RiMenu5Fill />
      </div>
    </div>
  );
}

export default Header;
