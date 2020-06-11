import styled from '@emotion/styled';
import { Link } from 'gatsby';

const BigLink = styled(Link)`
  background-color: ${({ theme }) => theme.blue};
  display: inline-block;
  align-self: center;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 19px;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BigLinkExternal = styled.a`
  background-color: ${({ theme }) => theme.blue};
  display: inline-block;
  align-self: center;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 19px;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default BigLink;