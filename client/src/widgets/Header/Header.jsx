import React from 'react';
import './Header.css';
import Logo from '../../shared/ui/Logo/Logo';
import Button from '@su/Button/Button';
import { NavLink } from 'react-router';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo></Logo>
        <nav className="header__navigation">
          <Button as={NavLink} to="/" variant="header-link">
            главная
          </Button>
          <Button as={NavLink} to="/templates" variant="header-link">
            шаблоны
          </Button>
          <Button as={NavLink} to="/about" variant="header-link">
            о проекте
          </Button>
          <Button as={NavLink} to="/contacts" variant="header-link">
            контакты
          </Button>
        </nav>
        <Button as={NavLink} to="/contacts">
          заказать приглашение
        </Button>
      </div>
    </header>
  );
}

export default Header;
