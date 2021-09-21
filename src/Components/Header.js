import React from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  SearchFieldContainer,
  Buttons,
} from "./headerCss";
import { FaHands } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import Slide from "react-reveal/Slide";

function Header() {
  const links = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <Slide bottom>
      <HeaderContainer>
        <LogoContainer>
          <Link style={links} to="/">
            <FaHands size={50} />
          </Link>
          <p className="logoTitle">E LEARN</p>
        </LogoContainer>

        <SearchFieldContainer>
          <div className="loginContainer">
            <Buttons color="white">
              <Link style={links} to="/pager">
                <BsBag />
              </Link>
            </Buttons>
            <Link style={links} to="/pager">
              <Buttons login>
                <VscAccount />
                Login
              </Buttons>
            </Link>
            <input className="searchBox" placeholder="Search here" />
          </div>
          <div className="listContainer">
            <ul className="list">
              <Link style={links} to="/">
                <li>Home</li>
              </Link>
              <Link style={links} to="/course-page">
                <li>Online Courses</li>
              </Link>
            </ul>
          </div>
        </SearchFieldContainer>
      </HeaderContainer>
    </Slide>
  );
}

export default Header;
