import React from 'react';
import Header from '../Header/Header';
import Navigation from '../SmartphonesPage/Navigation/Navigation';
import PageNav from '../SmartphonesPage/PageNav/PageNav';
import '../SmartphonesPage/Smartphones.css';

export default function SmartphonesPage() {
  return (
    <div>
      <Header />
      <Navigation />
      <PageNav />
    </div>
  );
}
