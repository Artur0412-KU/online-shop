import React from "react";

export default function BenefitsCard(props) {
  return (
    <div className="benefit-card">
      <img src={props.img} />
      <h3>{props.text}</h3>
    </div>
  );
}
