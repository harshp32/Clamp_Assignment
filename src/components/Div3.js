import React from "react";
import ClientCard from "../components/cards/Div3/ClientCard";
import TransactionCard from "../components/cards/Div3/TransactionCard";
import ProjDetailsCard from "../components/cards/Div3/ProjDetailsCard";
import ProjectProgCard from "../components/cards/Div3/ProjectProgCard";
import './css/Div3.css'

const Div3=()=>{
    return(
        <div className="div3">
           <ClientCard/>
           <TransactionCard/>
            <div className="div3-project">
                <ProjDetailsCard/>
                <ProjectProgCard/>
            </div>
        </div>
    );
};

export default Div3