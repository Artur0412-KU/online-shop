import React from 'react';
import DATA from '../constants'

export default function ContactInfo() {
  return (
    <div className="contact-section contact-info-section">
      <h3>Contact Information</h3>
      <nav className="contact-nav footer-contact-nav">
        {DATA.map((item, index) => (
          <a
            key={index}
            target='__blank'
            href={item.link}
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
