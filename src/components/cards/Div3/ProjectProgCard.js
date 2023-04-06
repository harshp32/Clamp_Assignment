import React from 'react';
import "../../css/Div3/ProjProgressCard.css";
import dotIcon from '../../../assets/dots.svg';
import CircularProgress from './CircularProgress';

export default function ProjProgressCard() {
  return (
    <div className="PPouterStyle">
        <div className="ppHeader">
            <div className="ppHeading">
            Project Progress
            </div>
            <div className="ppdotIcon">
                <img src={dotIcon} alt='3-dot-icon'/>
            </div>
        </div>
        <CircularProgress progress={75} />
        <div className="ppContent">
          3 Remaining Projects
        </div>
    </div>
  )
}
