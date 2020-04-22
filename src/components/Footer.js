import React from "react";
import styled from "@emotion/styled";

import logo from "../img/Main_Logo_Colour.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

const Icon = styled.img`
  margin: 10px 10px 10px 0;
  width: 25px;
  filter: invert(100%) sepia(0%) saturate(6975%) hue-rotate(320deg)
    brightness(112%) contrast(101%);
`;

const Social = () => (
  <div>
    <a title="facebook" href="https://www.facebook.com/TopthornArena/">
      <Icon src={facebook} alt="Facebook" />
    </a>
    <a title="instagram" href="https://www.instagram.com/topthorn_arena/">
      <Icon src={instagram} alt="Instagram" />
    </a>
  </div>
);

const Filler = styled.div`
  flex-grow: 1;
`;

const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.blue};
  display: flex;
  flex-direction: column;
  align-items: center;

  .center {
    width: 100%;
    max-width: ${({ theme }) => theme.width}px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 400px) {
      flex-direction: column;
      align-items: stretch;
    }

    .logo {
      width: 200px;
      @media (max-width: 400px) {
        width: 100%;
      }
    }
  }
`;

const Content = styled.div`
  text-align: left;
  padding: 20px 15px;

  p {
    color: white;
    margin-bottom: 5px;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <Filler />
      <Container>
        <div className="center">
          <img className="logo" src={logo} alt="Topthorn Arena logo" />
          <Content>
            <p>Topthorn Arena</p>
            <p>Topthorn, Debenham Road, Stonham Aspal, IP14 6BX</p>
            <Social />
            <a href="/admin/" target="_blank" rel="noopener noreferrer">
              Admin Dashboard
            </a>
          </Content>
        </div>
      </Container>
    </>
  );
};

export default Footer;
