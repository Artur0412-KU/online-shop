import React from 'react';
import MessengerIcon from '../social-media/messenger.png';
import InstagramIcon from '../social-media/insta.png';
import TelegramIcon from '../social-media/telegram.png';
import FacebookIcon from '../social-media/facebook.png';
import EmailIcon from '../social-media/email.svg';
import PhoneIcon from '../social-media/phone.png';
import DATA from '../constants';

export default function ContactInfo() {
  return (
    <div className="contact-section contact-info-section">
      <h3>Contact Information</h3>
      <nav className="contact-nav">
        {DATA.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target='_blank'
            rel="noopener noreferrer"
          >
            <img src={item.icon} alt="" className={item.className} />
          </a>
        ))}
        <a
          href="https://teamchallenge.io/team/387/public"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2024 GadgetHouse
        </a>
      </nav>
    </div>
  );
}
