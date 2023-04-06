import React from "react";
import RevenueCard from "../components/cards/Div2/RevenueCard";
import TravelCard from "../components/cards/Div2/TravelCard";
import HotelCard from "../components/cards/Div2/HotelCard";
import SlotsCard from "../components/cards/Div2/SlotsCard";
import './css/Div2.css'

const Div2=()=>{
    return(
        <div className="div2">
            <RevenueCard/>
            <div className="div2-2nd">
                <TravelCard/>
                <HotelCard/>
            </div>
            <SlotsCard/>
        </div>
    );
};

export default Div2;