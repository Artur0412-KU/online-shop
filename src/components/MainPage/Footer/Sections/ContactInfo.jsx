import React from 'react';
import MessengerIcon from '../social-media/messenger.png';
import InstagramIcon from '../social-media/insta.png';
import TelegramIcon from '../social-media/telegram.png';
import FacebookIcon from '../social-media/facebook.png';
import EmailIcon from '../social-media/email.svg';
import PhoneIcon from '../social-media/phone.png';

const contactInfo = [
  {
    icon: InstagramIcon,
    className: 'social-icon',
    href: 'https://www.instagram.com',
    target: '_blank',
  },
  {
    icon: MessengerIcon,
    className: 'social-icon',
    href: 'https://www.messenger.com',
    target: '_blank',
  },
  {
    icon: TelegramIcon,
    className: 'social-icon',
    href: 'https://telegram.org',
    target: '_blank',
  },
  {
    icon: FacebookIcon,
    className: 'social-icon',
    href: 'https://www.facebook.com',
    target: '_blank',
  },
  {
    icon: EmailIcon,
    className: 'social-icon',
    href: 'mailto:someone@example.com',
    target: '_blank',
  },
  {
    icon: PhoneIcon,
    className: 'social-icon',
    href: 'tel:+123456789',
    target: '_blank',
  },
];

export default function ContactInfo() {
  return (
    <div className="contact-section contact-info-section">
      <h3>Contact Information</h3>
      <nav className="contact-nav">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.target}
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
