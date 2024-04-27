import React from 'react'
import BenefitsCard from './BenefitsCard'
import ReturnIcon from '../img/benefit-icon/return.png'
import GiftIcon from '../img/benefit-icon/gift.png'
import CertificateIcon from '../img/benefit-icon/certificate.png'
import DeliveryIcon from '../img/benefit-icon/delivery.png'

export default function Benefits() {
  return (
    <div className='benefits-container'>
        <BenefitsCard img = {ReturnIcon} text = "Returns and exchanges"/>
        <BenefitsCard img = {GiftIcon} text = 'Bonuses for purchases'/>
        <BenefitsCard img = {CertificateIcon} text = 'Certified products'/>
        <BenefitsCard img = {DeliveryIcon} text = 'Free shipping'/>
    </div>
  )
}
