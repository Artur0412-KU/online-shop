import React from 'react';
import BenefitsCard from './BenefitsCard';
import ReturnIcon from '../../assets/img/benefit-icon/return.png';
import GiftIcon from '../../assets/img/benefit-icon/gift.png';
import CertificateIcon from '../../assets/img/benefit-icon/certificate.png';
import DeliveryIcon from '../../assets/img/benefit-icon/delivery.png';

export default function Benefits() {
  return (
    <div className="benefits-container">
      <BenefitsCard img={ReturnIcon} text="Returns and exchanges" />
      <BenefitsCard img={GiftIcon} text="Bonuses for purchases" />
      <BenefitsCard img={CertificateIcon} text="Certified products" />
      <BenefitsCard img={DeliveryIcon} text="Free shipping" />
    </div>
  );
}
