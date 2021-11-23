import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainMenuButton = styled.li`
  display: inline-block;
  cursor: pointer;
`;

export const MainMenuButtonLink = styled(Link)`
  position: relative;
  padding: 14px 15px 17px 15px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: inherit;
  text-decoration: none;

  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.BLUE_COLOR};
  }
`;
