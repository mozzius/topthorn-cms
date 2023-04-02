import React, { useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'gatsby';
import logo from '../img/Main_Logo_Colour.png';
import smallLogo from '../img/horse.png';
import styled from '@emotion/styled';
import HamburgerMenu from 'react-hamburger-menu';
import { css } from '@emotion/react';
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
  height: ${({ size }) => size.height}px;
  margin-left: 10px;
  width: ${({ size }) => size.width}px;
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
  const [shown, setShown] = useState(false);
  const timeRef = useRef();

  useLayoutEffect(() => {
    const calcShown = () => setShown(dropped);
    if (dropped) {
      calcShown();
    } else {
      timeRef.current = setTimeout(calcShown, 100);
    }
    return () => clearTimeout(timeRef.current);
  }, [dropped]);

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
        {shown && (
          <div
            className={dropped ? 'dropdown-content' : 'dropdown-content hiding'}
          >
            {children}
          </div>
        )}
      </button>
    </>
  );
};

const DropdownStyles = ({ isMobile, open, height, windowHeight }) =>
  isMobile
    ? css`
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
        opacity: ${open ? 1 : 0};
        pointer-events: ${open ? 'auto' : 'none'};
        transition: opacity 0.2s ease;

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

          @keyframes drop {
            from {
              max-height: 0;
              border-bottom-width: 0;
            }
            to {
              max-height: 150px;
              border-bottom-width: 1px;
            }
          }

          @keyframes undrop {
            from {
              max-height: 150px;
              border-bottom-width: 1px;
            }
            to {
              max-height: 0;
              border-bottom-width: 0;
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
            max-height: 150px;
            overflow: hidden;
            max-height: 0;
            animation: drop 0.1s forwards;
            transition: max-height 0.2s ease;
            border-bottom: 1px solid black;

            &.hiding {
              animation: undrop 0.1s forwards;
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
      `
    : css`
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

        @keyframes drop {
          from {
            opacity: 0;
            top: 35px;
          }
          to {
            opacity: 1;
            top: 50px;
          }
        }

        @keyframes undrop {
          from {
            opacity: 1;
            top: 50px;
          }
          to {
            opacity: 0;
            top: 35px;
          }
        }

        .dropdown-content {
          position: absolute;
          left: 10px;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 32px 0px;
          background-color: white;
          display: flex;
          flex-direction: column;
          min-width: 100%;
          overflow: hidden;
          border-radius: 5px;
          text-align: left;
          opacity: 1;
          pointer-events: auto;
          animation: drop 0.1s forwards;

          &.hiding {
            animation: undrop 0.1s forwards;
            pointer-events: none;
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

const ContentDropdown = styled.div`
  ${DropdownStyles}
`;

const Navbar = () => {
  const [{ windowWidth, windowHeight }, setWindowSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
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

  useLayoutEffect(() => {
    if (window !== undefined) {
      calcWindowSize();
      window.addEventListener('resize', calcWindowSize);
    }
    return () => {
      if (window !== undefined) {
        window.removeEventListener('resize', calcWindowSize);
      }
    };
  }, []);

  const ClosingLink = (props) => (
    <Link onClick={() => setOpen(false)} {...props} />
  );

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
                <Img
                  src={smallLogo}
                  alt="Topthorn Arena logo"
                  size={{ width: 70, height: 60 }}
                />
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
              <Img
                src={logo}
                alt="Topthorn Arena logo"
                size={{ width: 255, height: 175 }}
              />
            </ClosingLink>
          )}
          <ContentDropdown
            isMobile={isMobile}
            height={height}
            windowHeight={windowHeight}
            open={open}
          >
            <ClosingLink to="/">Home</ClosingLink>
            <ClosingLink to="/about">About Us</ClosingLink>
            <Dropdown text="What's On">
              <ClosingLink to="/events">Events {'&'} Clinics</ClosingLink>
              <ClosingLink to="/times">Times</ClosingLink>
              <ClosingLink to="/results">Results</ClosingLink>
            </Dropdown>
            <ClosingLink to="/hire">Arena Hire</ClosingLink>
            <ClosingLink to="/photographs">Photos</ClosingLink>
            <ClosingLink to="/contact">Contact</ClosingLink>
          </ContentDropdown>
        </Inner>
      </Nav>
      <Blank height={height} />
    </>
  );
};

export default Navbar;
