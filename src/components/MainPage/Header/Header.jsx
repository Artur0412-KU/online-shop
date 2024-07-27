import React from 'react';

export default function Header() {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <header className="header">
      <a href="#" onClick={handleLogoClick}>
        <p className="nunito-sans-logo">GadgetHouse</p>
      </a>
    </header>
  );
}
