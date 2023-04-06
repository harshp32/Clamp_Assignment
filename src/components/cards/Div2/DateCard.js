import React from 'react';
import "../../css/Div2/DateCard.css";

export default function DateCard({date, month}) {
  return (
    <div className='dateouterStyle'>
        <div className="dateNumber">{date}</div>
        <div className="dateText">{month}</div>
    </div>
  )
}
