import React from "react";
import DashboardCard from "../components/cards/Div1/DashboardCard";
import NameCard from '../components/cards/Div1/NameCard';
import GoCard from "../components/cards/Div1/GoCard";
import './css/Div1.css'

const Div1=()=>{
    return(
        <div className="div1">
           <NameCard/>
           <DashboardCard/>
           <GoCard/>            
        </div>
    );
};

export default Div1;