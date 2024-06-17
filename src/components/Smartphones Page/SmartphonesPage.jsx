import React from 'react';
import Header from '../MainPage/Header/Header';
import Navigation from './Navigation/Navigation';
import PageNav from './PageNav/PageNav';
import './Smartphones.css';

export default function SmartphonesPage() {
  return (
    <div>
      <Header />
      <Navigation />
      <PageNav />
    </div>
  );
}
