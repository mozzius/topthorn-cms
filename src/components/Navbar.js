import React, { useState, useLayoutEffect } from "react";
import { Link } from "gatsby";
import logo from "../img/Main_Logo_Colour.png";
import smallLogo from "../img/horse.png";
import styled from "@emotion/styled";
import HamburgerMenu from "react-hamburger-menu";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.blue};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ height }) => height}px;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.width};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    height: 100%;
  }
`;

// const Title = styled.h1`
//   font-family: ${({ theme }) => theme.font};
//   color: white;
//   text-transform: uppercase;
//   font-size: 22px;
//   letter-spacing: 5px;
// `;

const Img = styled.img`
  height: 100%;
  margin-left: 10px;
`;

const Blank = styled.div`
  height: ${({ height }) => height}px;
`;

const Icon = styled(FontAwesomeIcon)`
  position: relative;
  top: 5px;
  height: 15px;
  margin-left: 5px;
`;

const Dropdown = ({ text, children }) => {
  const [dropped, setDropped] = useState(false);

  return (
    <>
      <div
        className="dropdown"
        onBlur={e =>
          !e.currentTarget.contains(e.relatedTarget) && setDropped(false)
        }
        onClick={() => setDropped(d => !d)}
        onKeyDown={() => setDropped(d => !d)}
        tabIndex="0"
      >
        {text}
        <Icon icon={dropped ? faChevronUp : faChevronDown} />
        {dropped && <div className="dropdown-content">{children}</div>}
      </div>
    </>
  );
};

const Navbar = () => {
  const [
    { width: windowWidth, height: windowHeight },
    setWindowSize
  ] = useState({ width: 1920, height: 1080 });
  const [open, setOpen] = useState(false);
  const isMobile = windowWidth < 960;
  const height = isMobile ? 60 : 150;

  const calcWindowSize = () => {
    if (window !== undefined) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  };

  useLayoutEffect(() => {
    if (window !== undefined) {
      calcWindowSize();
      window.addEventListener("resize", calcWindowSize);
    }
    return () => window.removeEventListener("resize", calcWindowSize);
  }, []);

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
    z-index: 15;

    a,
    .dropdown {
      position: relative;
      cursor: pointer;
      color: black;
      text-decoration: none;
      padding: 10px 30px;
      font-size: 20px;
      height: max-content;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &:hover {
        background-color: #eee;
      }
    }
  `;

  const links = css`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;

    a {
      padding: 10px 15px;
      color: white;
      text-decoration: none;
      height: min-content;
    }

    .dropdown {
      padding: 10px 15px;
      color: white;
      cursor: pointer;
    }

    .dropdown-content {
      position: absolute;
      top: 50px;
      border: 1px solid black;
      left: 0;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 100%;

      a {
        color: black;
        width: 100%;

        &:hover {
          background-color: #eee;
        }
      }
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
              <Link to="/">
                <Img src={smallLogo} alt="Topthorn Arena logo" />
              </Link>
              <HamburgerMenu
                color="white"
                css={css`
                  margin-right: 30px;
                  cursor: pointer;
                `}
                isOpen={open}
                menuClicked={() => setOpen(o => !o)}
                height={20}
                width={25}
              />
            </>
          ) : (
            <Link to="/">
              <Img src={logo} alt="Topthorn Arena logo" />
            </Link>
          )}
          <div css={isMobile ? (open ? dropdown : none) : links}>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Dropdown text="Arena Hire">
              <Link to="/products" onClick={() => setOpen(false)}>
                Products
              </Link>
              <Link to="/blog" onClick={() => setOpen(false)}>
                Blog
              </Link>
            </Dropdown>
            <Dropdown text="Contact Us">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
              <Link to="/contact/examples" onClick={() => setOpen(false)}>
                Form Examples
              </Link>
            </Dropdown>
          </div>
        </Inner>
      </Nav>
      <Blank height={height} />
    </>
  );
};

export default Navbar;
