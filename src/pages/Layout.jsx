import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/MainPage/Header/Header';
import Navigation from '../components/MainPage/Navigation/Navigation';
import Footer from '../components/MainPage/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />

      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
