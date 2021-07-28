import React from 'react';

import { MainMenuButton, MainMenuButtonLink } from './styled';

interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <MainMenuButton onClick={onClick}>
      <MainMenuButtonLink to="/">{name}</MainMenuButtonLink>
    </MainMenuButton>
  );
};

export default Button;
