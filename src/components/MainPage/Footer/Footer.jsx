import React from 'react';
import LogoWhite from '../img/gadget-house-white.png';
import EmailIcon from '../img/social-media/email.svg';
import LocationIcon from '../img/location.png';
import PhoneIcon from '../img/phone.png';
import Clients from './Sections/Clients';
import Categories from './Sections/Categories';
import ContactInfo from './Sections/ContactInfo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={LogoWhite} alt="Gadget House Logo" />
        <div className="main-information">
          <div className="footer-list">
            <img src={EmailIcon} alt="Email Icon" />
            <a href="mailto:GadgetHouse@gmail.com">GadgetHouse@gmail.com</a>
          </div>
          <div className="footer-list">
            <img src={PhoneIcon} alt="Phone Icon" />
            <a href="tel:(057)-333-33-33">(057) 333 33 33</a>
          </div>
          <div className="footer-list">
            <img src={LocationIcon} alt="Location Icon" />
            <a href="https://www.google.com/maps/place/Hostynyy+Dvir,+Kontraktova+Square,+4,+Kyiv,+02000/@50.4648844,30.5144404,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce4026cba28f:0xb1e17e87b1141676!8m2!3d50.464881!4d30.5170153!16s%2Fg%2F11c0ptqwyv?entry=ttu">
              Ave. Sciences, 4
            </a>
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
