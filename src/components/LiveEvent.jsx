import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Panel as UnstyledPanel } from './Layout';

const Panel = styled(UnstyledPanel)`
  padding: 0 15px;
  margin-bottom: -50px;
`;

const Container = styled.div`
  position: relative;
  left: 0;
  top: -42px;
  width: 100%;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 10px;
  color: white;
  padding: 15px 20px;

  .inner {
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
      * {
        margin: 0;
      }
    }
  }

  .grow {
    flex-grow: 1;
  }
`;

const Blinky = styled.div`
  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  margin-right: 20px;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: red;
  animation: blink 1s ease infinite;
`;

const Link = styled(OutboundLink)`
  background-color: white;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: opacity 0.3s ease;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 500px) {
    display: inline-block;
    margin: 15px 0 0 50px;
  }
`;

const LiveEvent = ({ event, link, expiry }) => {
  const [small, setSmall] = useState(false);
  const [expired, setExpired] = useState(new Date(expiry) < new Date());
  const timeRef = useRef();

  useEffect(() => {
    if (!expired) {
      timeRef.current = setInterval(() => {
        const isExpired = new Date(expiry) < new Date();
        if (isExpired) {
          setExpired(isExpired);
        }
      }, 1000);
      return () => clearInterval(timeRef.current);
    }
  }, [expiry, expired]);

  useLayoutEffect(() => {
    const calcSmall = () => setSmall(window.innerWidth < 500);
    window.addEventListener('resize', calcSmall);
    return () => window.removeEventListener('resize', calcSmall);
  }, []);

  if (expired) return null;

  return (
    <Panel>
      <Container>
        <div className="inner">
          <Blinky />
          <div>
            <h1>{event} is happening at Topthorn</h1>
            <p>Follow along with the live scoreboard</p>
          </div>
          <div className="grow" />
          {!small && <Link href={link}>Live Scoreboard</Link>}
        </div>
        {small && <Link href={link}>Live Scoreboard</Link>}
      </Container>
    </Panel>
  );
};

export default LiveEvent;
