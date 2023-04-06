import React from "react";
import "../../css/Div2/RevenueCard.css";
import dollarIcon from "../../../assets/dollar.svg";

export default function RevenueCard() {
  return (
    <div className="RCouterStyle">
      <div className="RCiconContainer">
        <img src={dollarIcon} alt="dollar-icon"/>
      </div>
      <div className="revenueContainer">
        <div className="amountTitle">Total Revenue</div>
        <div className="amount">$92,983</div>
        <div className="progressBar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
}
