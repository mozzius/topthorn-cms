import styled from "@emotion/styled";

const FullWidthImage = styled.div`
  box-sizing: border-box;
  background-image: url(${({ image }) => image});
  background-position: top left;
  background-attachment: fixed;
  filter: grayscale(${({ grayscale }) => (grayscale ? 0.5 : 0)});
  width: 100vw;
  height: 400px;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0 -50vw 2em;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FullWidthImage;
