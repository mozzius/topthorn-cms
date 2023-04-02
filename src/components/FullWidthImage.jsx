import styled from '@emotion/styled';

export const HeroTitle = styled.div`
  display: flex;
  line-height: 1;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  position: relative;
  height: 400px;
  width: 100%;

  div {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
  }

  * {
    text-align: center;
    font-family: Merriweather, serif;
    color: white;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
  }

  h1 {
    margin-top: 0;
    font-size: 36px;
    z-index: 2;
    padding: 0 10vw;
  }

  h3 {
    font-size: 26px;
    z-index: 2;
    padding: 0 10vw;
  }
`;
