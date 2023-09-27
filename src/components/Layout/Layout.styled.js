import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 10px 70px;
  background-color: #6981e3;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  margin-right: 20px;
  font-size: 20px;

  &.active {
    color: yellow;
  }
`;

export const StyledNav = styled.nav`
  text-align: left;
  padding: 15px;
`;
