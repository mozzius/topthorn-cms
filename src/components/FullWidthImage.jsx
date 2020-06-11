import styled from '@emotion/styled';

const img = (image) => (typeof image === 'string' ? image : image.url);

const FullWidthImage = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.blue};
  background-image: url(${({ image }) => img(image)});
  filter: grayscale(${({ grayscale }) => (grayscale ? 0.5 : 0)});
  width: 100vw;
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.div`
  display: flex;
  line-height: 1;
  max-width: 90vw;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;

  * {
    text-align: center;
    font-family: Merriweather, serif;
    color: white;
  }

  h1 {
    font-size: 32px;
  }

  h3 {
    font-size: 25px;
  }
`;

export default FullWidthImage;
