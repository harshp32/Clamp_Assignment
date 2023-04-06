import React from 'react';
import "../../css/Div2/TravelCard.css";
import postIcon from '../../../assets/bearded-man.svg'

export default function TravelCard() {
  return (
    <div className="TrCouterStyle">
          <div className="tHeading">
            Travel
          </div>
          <div className="tContent1">
            Mobile Application
          </div>
          <div className="tContent2">
            Seen by
          </div>
          <div className="avatar">
            <div >
              <img src={postIcon} alt="post-icon"/>
            </div>
            <div className='poIcon'>
              <img src={postIcon} alt="post-icon"/>
            </div>
            <div className='poIcon'>
              <img src={postIcon} alt="post-icon"/>
            </div>
            <div className='poIcon'>
              <img src={postIcon} alt="post-icon"/>
            </div>
          </div>
          <div className="buttons">
            <div className="tourBtn">
              <button className='tour'>Tour</button>
            </div>
            <div className="tripBtn">
              <button className="trip">Trip</button>
            </div>
          </div>
          <div className="transportBtn">
            <button className="trans">Transport</button>
          </div>
    </div>
  )
}
