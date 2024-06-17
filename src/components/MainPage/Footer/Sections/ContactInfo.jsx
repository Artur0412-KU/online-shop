import React from 'react';
import { InstagramOutlined } from '@ant-design/icons';
import MessengerIcon from '../social-media/messenger.png';
import InstagramIcon from '../social-media/insta.png';
import TelegramIcon from '../social-media/telegram.png';
import FacebookIcon from '../social-media/facebook.png';
import EmailIcon from '../social-media/email.svg';
import PhoneIcon from '../social-media/phone.png';

export default function ContactInfo() {
  return (
    <div className="contact-section">
      <h3>Contact Information</h3>
      <nav className="contact-nav">
        <a href="">
          <img src={InstagramIcon} className="social-icon" />
        </a>
        <a href="">
          <img src={MessengerIcon} className="social-icon" />
        </a>
        <a href="">
          <img src={TelegramIcon} className="social-icon" />
        </a>
        <a href="">
          <img src={FacebookIcon} className="social-icon" />
        </a>
        <a href="">
          <img src={EmailIcon} className="social-icon" />
        </a>
        <a href="">
          <img src={PhoneIcon} className="social-icon" />
        </a>
      </nav>
    </div>
  );
}
