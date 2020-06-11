import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import logo from '../img/Main_Logo_Colour.png';
import smallLogo from '../img/horse.png';
import styled from '@emotion/styled';
import HamburgerMenu from 'react-hamburger-menu';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.blue};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ height }) => height}px;
  position: ${({ isMobile }) => (isMobile ? 'fixed' : 'absolute')};
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

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font};
  color: white;
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 2px;
  margin: 0 20px 0 10px;
  line-height: 25px;
`;

const Img = styled.img`
  height: 100%;
  margin-left: 10px;
`;

const Blank = styled.div`
  height: ${({ height }) => height}px;
`;

const Icon = styled(FontAwesomeIcon)`
  height: 15px;
  margin-left: 5px;
`;

const Dropdown = ({ text, children }) => {
  const [dropped, setDropped] = useState(false);

  return (
    <>
      <button
        className="dropdown"
        onClick={() => setDropped((d) => !d)}
        onKeyDown={() => setDropped((d) => !d)}
        tabIndex="0"
        onBlur={(e) =>
          !e.currentTarget.contains(e.relatedTarget) && setDropped(false)
        }
      >
        <p>
          {text}
          <Icon icon={dropped ? faChevronUp : faChevronDown} />
        </p>
        <div
          className={dropped ? 'dropdown-content dropped' : 'dropdown-content'}
        >
          {children}
        </div>
      </button>
    </>
  );
};

const Navbar = () => {
  const [{ windowWidth, windowHeight }, setWindowSize] = useState({
    windowWidth: 1920,
    windowHeight: 1080,
  });
  const [open, setOpen] = useState(false);
  const isMobile = windowWidth < 960;
  const height = isMobile ? 60 : 175;

  const calcWindowSize = () => {
    if (window !== undefined) {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      calcWindowSize();
      window.addEventListener('resize', calcWindowSize);
    }
    return () => window.removeEventListener('resize', calcWindowSize);
  }, []);

  const ClosingLink = (props) => (
    <Link onClick={() => setOpen(false)} {...props} />
  );

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
    font-size: 16px;

    a {
      height: 45px;
      color: black;
      text-decoration: none;
      padding: 10px 30px;

      &:hover {
        background-color: #eee;
      }
    }

    .dropdown {
      cursor: pointer;
      color: black;
      text-decoration: none;
      background-color: white;
      border: none;
      font-size: 16px;
      padding: 0;

      p {
        padding: 10px 30px;
        margin: 0;
        text-align: left;
        height: 45px;
        display: flex;
        justify-content: space-between;

        &:hover {
          background-color: #eee;
        }

        svg {
          align-self: center;
        }
      }

      .dropdown-content {
        display: block;
        width: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 100%;
        z-index: 20;
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.2s ease;

        &.dropped {
          max-height: 150px;
          border-bottom: 1px solid black;
        }

        a {
          color: black;
          width: 100%;
          white-space: unset;
          text-align: left;

          &:hover {
            background-color: #eee;
          }
        }
      }
    }
  `;

  const links = css`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;
    white-space: nowrap;

    a {
      padding: 10px 15px;
      color: white;
      text-decoration: none;
      height: 45px;
    }

    .dropdown {
      padding: 10px 15px;
      color: white;
      cursor: pointer;
      height: 45px;
      position: relative;
      display: flex;
      flex-direction: row;
      background: none;
      border: none;
      font-size: 16px;

      p {
        margin: 0;
      }
    }

    .dropdown-content {
      position: absolute;
      top: 35px;
      left: 10px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 32px 0px;
      background-color: white;
      display: flex;
      flex-direction: column;
      min-width: 100%;
      overflow: hidden;
      border-radius: 5px;
      text-align: left;
      opacity: 0;
      pointer-events: none;
      transition: 0.1s ease;
      transition-property: opacity position;

      &.dropped {
        opacity: 1;
        pointer-events: auto;
        top: 50px;
      }

      a {
        color: black;
        width: 100%;
        height: unset;
        background-color: white;

        &:first-of-type {
          border-radius: 5px 5px 0 0;
        }
        &:last-of-type {
          border-radius: 0 0 5px 5px;
        }

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
      <Nav height={height} isMobile={isMobile}>
        <Inner>
          {isMobile ? (
            <>
              <ClosingLink
                to="/"
                css={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  text-decoration: none;
                `}
              >
                <Img src={smallLogo} alt="Topthorn Arena logo" />
                <Title>TOPTHORN ARENA</Title>
              </ClosingLink>
              <HamburgerMenu
                color="white"
                css={css`
                  margin-right: 30px;
                  cursor: pointer;
                `}
                isOpen={open}
                menuClicked={() => setOpen((o) => !o)}
                height={20}
                width={25}
              />
            </>
          ) : (
            <ClosingLink to="/">
              <Img src={logo} alt="Topthorn Arena logo" />
            </ClosingLink>
          )}
          <div css={isMobile ? (open ? dropdown : none) : links}>
            <ClosingLink to="/about">About Us</ClosingLink>
            <Dropdown text="What's On">
              <ClosingLink to="/events">Events</ClosingLink>
              <ClosingLink to="/times">Times</ClosingLink>
              <ClosingLink to="/results">Results</ClosingLink>
            </Dropdown>
            <ClosingLink to="/hire">Arena Hire</ClosingLink>
            <ClosingLink to="/contact">Contact</ClosingLink>
          </div>
        </Inner>
      </Nav>
      <Blank height={height} />
    </>
  );
};

export default Navbar;
