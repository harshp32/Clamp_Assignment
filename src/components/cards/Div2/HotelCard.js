import React from 'react';
import postIcon from '../../../assets/bearded-man.svg';

export default function HotelCard() {
  return (
    <div className="TrCouterStyle">
          <div className="tHeading">
            Hotel
          </div>
          <div className="tContent1">
            Dashboard
          </div>
          <div className="tContent2">
            Seen by
          </div>
          <div className="avatar">
            <div>
              <img src={postIcon} alt='avatar-icon'/>
            </div>
            <div className='poIcon'>
              <img src={postIcon} alt='avatar-icon'/>
            </div>
            <div className='poIcon'>
              <img src={postIcon} alt='avatar-icon'/>
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
