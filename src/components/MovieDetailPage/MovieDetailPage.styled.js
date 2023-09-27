import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const OneMovieTopContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const OneMovieImg = styled.img`
  width: 350px;
`;

export const OneMovieSpan = styled.span`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
  display: inline-block;
  margin-right: 10px;
`;

export const OneMovieInfo = styled.p`
  font-weight: 700;
  padding: 20px;
  font-size: 20px;
`;

export const OneMovieLi = styled.li`
  margin-bottom: 10px;
`;

export const OneMovieCast = styled(NavLink)`
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px;
`;
