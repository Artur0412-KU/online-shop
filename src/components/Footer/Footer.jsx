import React from 'react'
import LogoWhite from '../img/gadget-house-white.png'
import EmailIcon from '../img/social-media/email.svg'
import LocationIcon from '../img/location.png'
import PhoneIcon from '../img/phone.png'
import Clients from './Sections/Clients'
import Categories from './Sections/Categories'
import ContactInfo from './Sections/ContactInfo'


export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-left'>
            <img src={LogoWhite}/>
            <div className='main-information'>
                <div className='footer-list'>
                  <img src={EmailIcon}/>
                  <p>GadgetHouse@gmail.com</p>
                </div>
                <div className='footer-list'>
                  <img src={PhoneIcon}/>
                  <p>(057) 333 33 33</p>
                </div>
                <div className='footer-list'>
                  <img src={LocationIcon}/>
                  <p>GadgetHouse@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='footer-right'>
            <Clients/>
            <Categories/>
            <ContactInfo/>
        </div>
    </footer>
  )
}
