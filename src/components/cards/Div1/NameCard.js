import React from 'react';
import "../../css/Div1/NameCard.css";;

export default function NameCard() {
  return (
    <div className='NCouterStyle'>
      <div className="text">
        <div className="nameTitle">
          Hira R.
        </div>
        <div className="positionName">
          UX/UI Designer
        </div>
      </div>
      <div className="details">
        <div className="projects">
          <div className="detailsNumbers">125</div>
          <div className="detailsText">Projects</div>
        </div>
        <div className="revenue">
          <div className="detailsNumbers">$124</div>
          <div className="detailsText">Revenue</div>
        </div>
      </div>
    </div>
  )
}
