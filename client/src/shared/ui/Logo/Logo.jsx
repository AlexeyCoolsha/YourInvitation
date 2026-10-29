import './Logo.css';
import logoImg from '@sas/images/logo.svg';
import logoTextImg from '@sas/images/logo-text.svg';
import Button from '../Button/Button';
import { NavLink } from 'react-router';

function Logo() {
  return (
    <Button as={NavLink} to="/" variant="transparent">
      <div className="logo">
        <img src={logoImg} alt="Логотип" className="logo__image" />
        <img src={logoTextImg} alt="Текстовый логотип" className="logo__image--text" />
      </div>
    </Button>
  );
}

export default Logo;
