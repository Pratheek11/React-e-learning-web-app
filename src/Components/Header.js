import React from "react";
import styled, { css } from "styled-components";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
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

const HeaderContainer = styled.div`
  margin: 1%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #e8c1c5;
`;

const Buttons = styled.p`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 60px;
  height: 15px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  ${({ login }) =>
    login &&
    css`
      background-color: #011638;
      color: white;
      width: 70px;
    `}
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  // justify-content: space-around;
  margin: 2.5%;
  align-items: center;

  .logoTitle {
    font-size: 28px;
    margin: 10px;
    pointer-events: none;
  }
`;
const SearchFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5%;
  flex: 1;

  .loginContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }

  .searchBox {
    height: 22px;
    // width: 150px;
    width: 250px;
    border: 0;
    border-radius: 5px;
    color: black;
    padding: 5px;
    flex-wrap: wrap;
  }

  .listContainer {
    margin: 2.5%;
  }
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
  }
  .list li {
    margin: 10px;
    cursor: pointer;
  }
`;

export default Header;
