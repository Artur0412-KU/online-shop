import React from 'react'
import { InstagramOutlined } from '@ant-design/icons'
import InstagramIcon from '../social-media/insta.png'
import DATA from '../constants';

export default function ContactInfo() {
  return (
    <div className='contact-section contact-info-section'>
        <h3>Contact Information</h3>
        <nav className='contact-nav'>
          {DATA.map(item => (
            <a href={item.link} key={item.id}><img src={item.icon} className='social-icon' href = ""/></a> 
          ))}
          
        </nav>
    </div>
  );
}
