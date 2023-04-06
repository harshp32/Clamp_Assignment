import React from "react";
import "../../css/Div1/DashboardCard.css";
import dashIcon from "../../../assets/dashboard.svg";
import emailIcon from "../../../assets/email.svg";
import calIcon from "../../../assets/event.svg";
import graphIcon from "../../../assets/chart.svg";
import formIcon from "../../../assets/forms.svg";

export default function DashboardCard() {
  return (
    <div className="DCouterStyle">
      <div className="dashboard">
        <div className="dash">
          <div className="imgContainer">
            <img src={dashIcon} alt="dash-icon" />
          </div>
          <div className="dashText dashboardText">Dashboard</div>
        </div>
      </div>

      <div className="email">
        <div className="dash">
          <div className="imgContainer">
            <img src={emailIcon} alt="email-icon"/>
          </div>
          <div className="dashText">Email</div>
        </div>
      </div>

      <div className="cal">
        <div className="dash">
          <div className="imgContainer">
            <img src={calIcon} alt="cal-icon"/>
          </div>
          <div className="dashText">Calender</div>
        </div>
      </div>

      <div className="graph">
        <div className="dash">
          <div className="imgContainer">
            <img src={graphIcon} alt="graph-icon"/>
          </div>
          <div className="dashText">Graph</div>
        </div>
      </div>

      <div className="form">
        <div className="dash">
          <div className="imgContainer">
            <img src={formIcon} alt="form-icon"/>
          </div>
          <div className="dashText">Forms</div>
        </div>
      </div>
    </div>
  );
}
