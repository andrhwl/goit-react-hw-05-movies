import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader';
import { HeaderContainer, StyledLink, StyledNav } from './Layout.styled';

export default function SharedLayout() {
  return (
    <>
      <HeaderContainer>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="movies">Movies</StyledLink>
        </StyledNav>
      </HeaderContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
