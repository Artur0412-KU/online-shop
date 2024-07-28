import React from 'react';
import { ROOT } from '../../../App';
import { Link } from 'react-router-dom';

export default function Header() {
  /*   const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.reload();
  }; */

  return (
    <header className="header">
      <Link to={ROOT}>
        <p className="nunito-sans-logo">GadgetHouse</p>
      </Link>
    </header>
  );
}
