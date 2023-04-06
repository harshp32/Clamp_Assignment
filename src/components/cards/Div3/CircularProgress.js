import React from "react";
import "../../css/Div3/CircularProgress.css";

export default function CircularProgress({ progress }) {
  const circumference = Math.PI * 90;
  const strokeDashoffset = circumference - Math.PI * progress * 0.02 * 45;
  const strokeWidth = 5;
  return (
    <div className="container">
      <div className="progressContainer">
        <svg width={100} height={100}>
          <circle
            cx={50}
            cy={50}
            r={45}
            fill="none"
            stroke="rgb(56 12 187)"
            strokeDasharray={`${circumference} ${circumference}`}
            {...{ strokeWidth, strokeDashoffset }}
          />
        </svg>
      </div>
      <div className="innerContainer">
        <span>{`${progress}%`}</span>
      </div>
    </div>
  );
}
