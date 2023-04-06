import React from "react";
import DateCard from "./DateCard";
import "../../css/Div2/SlotsCard.css";
import Switch from "@mui/material/Switch";

export default function SlotsCard() {
  return (
    <div className="SCouterStyle">
      <div className="scHeader">
        <div className="scTitle">Free Slots Available</div>
        <div className="scIcon">
          <Switch
            sx={{
              "&.MuiSwitch-root .MuiSwitch-switchBase": {
                color: "white",
              },

              "&.MuiSwitch-root .Mui-checked": {
                color: "rgb(56 12 187)",

              },
              ".MuiSwitch-track": {
                backgroundColor: "black",
                height: "5px",
                marginTop: "auto",
                marginBottom: "auto",
                opacity: 1,
              },
              ".Mui-checked+.MuiSwitch-track": {
                backgroundColor: "black",
                height: "5px",
                marginTop: "auto",
                marginBottom: "auto",
                opacity: 1,
              }
            }}
            defaultChecked
          />
        </div>
      </div>
      <div className="dateContainer">
        <div className="juneColumn">
          <div className="block-p">
            <DateCard date="12" month="June" />
          </div>
          <div className="block">
            <DateCard date="18" month="June" />
          </div>
          <div className="block">
            <DateCard date="20" month="June" />
          </div>
        </div>
        <div className="juneColumn">
          <div className="block">
            <DateCard date="02" month="July" />
          </div>
          <div className="block">
            <DateCard date="10" month="July" />
          </div>
          <div className="block">
            <DateCard date="15" month="July" />
          </div>
        </div>
      </div>
    </div>
  );
}
