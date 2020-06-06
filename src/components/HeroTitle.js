import styled from "@emotion/styled";

const HeroTitle = styled.div`
  display: flex;
  height: 100px;
  line-height: 1;
  max-width: 90vw;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  h1 {
    color: white;
    font-size: 30px;
    font-family: Merriweather, serif;
  }

  h3 {
    color: white;
    font-size: 22px;
    font-family: Merriweather, serif;
  }
`;

export default HeroTitle;
