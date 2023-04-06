import React from 'react';
import "../../css/Div3/ProjDetailsCard.css";
import dotIcon from '../../../assets/dots.svg';

export default function ProjDetailsCard() {
  return (
    <div className="PDouterStyle">
        <div className="pHeader">
            <div className="pHeading">
            Project Deatils
            </div>
            <div className="dotIcon">
                <img src={dotIcon} alt="3-dot-icon"/>
            </div>
        </div>
        <div className="pclientName">
            Hira R.
        </div>
        <div className="pPosition">
            UI/UX Designer
        </div>
        <div className="ppProgress">
            Projects Progress
        </div>
        <div className="pBarPercentage">
            75%
        </div>
        <div className="pBar">
            <div className="barprogress"></div>
        </div>
    </div>
  )
}
