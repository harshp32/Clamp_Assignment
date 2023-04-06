import React from 'react';
import "../../css/Div3/ClientCard.css";
import arroIcon from "../../../assets/arrow.svg";
import logIcon from "../../../assets/logo.png";

export default function ClientCard() {
  return (
    <div className='CCouterStyle'>
         <div className="CCiconContainer">                
            <img src={logIcon} alt='logo-icon'/>
         </div>
         <div className='clientouterContainer'>
            <div className='clientinnerContainer'>
                <div className='client'>
                    Dear Client
                </div>
                <div className="clientDescription">
                    Join our online community. It helps in managing your projects
                </div>
            </div>
            <div className="arrowIcon">
                <img src={arroIcon} alt='arrow-icon'/>
            </div>            
         </div>
    </div>
  )
}