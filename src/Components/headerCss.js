import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  margin: 1%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #e8c1c5;
`;

export const Buttons = styled.p`
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

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin: 2.5%;
  align-items: center;

  .logoTitle {
    font-size: 28px;
    margin: 10px;
    pointer-events: none;
  }
`;
export const SearchFieldContainer = styled.div`
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

export const TitleContainer = styled.div`
  margin: 1%;
  width: 98%;
  height: 60vh;
  background-color: #c7efcf;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    // margin: 1%;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .titleImg {
    width: 500px;
    height: 300px;
    border-radius: 20px;
    position: absolute;
    top: 7%;
    left: 5%;
  }

  .title {
    position: absolute;
    bottom: 0%;
    right: 5%;
    font-size: 30px;
    display: flex;
    flex-wrap: wrap;
    pointer-events: none;
  }
`;
