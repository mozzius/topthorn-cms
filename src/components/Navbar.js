import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/Main_Logo_Colour.png";
import styled from "@emotion/styled";
import HamburgerMenu from "react-hamburger-menu";
import useWindowSize from "react-use-window-size";
import { css } from "@emotion/core";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.blue};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ height }) => height}px;
  position: fixed;
  top: 0;
  z-index: 100px;
`;

const Inner = styled.div`
  width: 100%;
  padding: 0 30px;
  height: 100%;
  max-width: ${({ theme }) => theme.width};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font};
  color: white;
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 5px;
`;

const Img = styled.img`
  height: 100%;
`;

const Blank = styled.div`
  height: ${({ height }) => height}px;
`;

const Navbar = () => {
  const { width, height: windowHeight } = useWindowSize();
  const [open, setOpen] = useState(false);
  const isMobile = width < 960;
  const height = isMobile ? 80 : 120;

  const dropdown = css`
    position: fixed;
    width: 100%;
    left: 0;
    top: ${height}px;
    height: ${windowHeight - height}px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 10px 0;
    z-index: 100;

    a {
      color: black;
      text-decoration: none;
      padding: 10px 30px;
      font-size: 20px;

      &:hover {
        background-color: #eee;
      }
    }
  `;

  const links = css`
    height: 100%;
    display: flex;
    flex-direction: row;

    a {
      color: white;
      text-decoration: none;
    }
  `;

  const none = css`
    display: none;
  `;

  return (
    <>
      <Nav height={height}>
        <Inner>
          {isMobile ? (
            <>
              <Title>Topthorn Arena</Title>
              <HamburgerMenu
                color="white"
                isOpen={open}
                menuClicked={() => setOpen(o => !o)}
                height={20}
                width={25}
              />
            </>
          ) : (
            <Img src={logo} alt="Topthorn Arena logo" />
          )}
          <div css={isMobile ? (open ? dropdown : none) : links}>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact/examples">Form Examples</Link>
          </div>
        </Inner>
      </Nav>
      <Blank height={height} />
    </>
  );
};

export default Navbar;
