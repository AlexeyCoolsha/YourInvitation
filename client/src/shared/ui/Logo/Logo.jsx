import React from 'react';
import './Logo.css';

function logo() {
  return (
    <div className="logo">
        <img src="../../assets/images/logo.webp" alt="logo" className="logo__image" />
        <img src="@sas/images/logo-text.svg" alt="logo-text" className="logo__image--text" />
    </div>
  )
}

export default logo