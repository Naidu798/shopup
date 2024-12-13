import React from "react";
import logo from "../../assets/Logo.png";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoChevronDownOutline } from "react-icons/io5";
import "./index.css";
import NavMenu from "../NavMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="logo-text-container">
          <span className="logo-text">LOGO</span>
        </div>
        <div className="icons">
          <FiSearch />
          <GoHeart />
          <BsHandbag />
          <CiUser />
          <div className="language">
            <span>ENG</span>
            <IoChevronDownOutline />
          </div>
        </div>
      </div>
      <div>
        <NavMenu />
      </div>
    </div>
  );
};

export default Header;
