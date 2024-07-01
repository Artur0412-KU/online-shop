import React from 'react';
import LogoWhite from '../../assets/img/gadget-house-white.png';
import EmailIcon from '../../assets/img/social-media/email.svg';
import LocationIcon from '../../assets/img/location.png';
import PhoneIcon from '../../assets/img/phone.png';
import Clients from './Sections/Clients';
import Categories from './Sections/Categories';
import ContactInfo from './Sections/ContactInfo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={LogoWhite} />
        <div className="main-information">
          <div className="footer-list">
            <img src={EmailIcon} />
            <a href="">GadgetHouse@gmail.com</a>
          </div>
          <div className="footer-list">
            <img src={PhoneIcon} />
            <a href="">(057) 333 33 33</a>
          </div>
          <div className="footer-list">
            <img src={LocationIcon} />
            <a href="">Ave. Sciences, 4</a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <Clients />
        <Categories />
        <ContactInfo />
      </div>
    </footer>
  );
}
