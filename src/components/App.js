import React from "react";
import Div1 from "./Div1";
import Div2 from "./Div2";
import Div3 from "./Div3";
import './css/App.css';

const App=()=>{
    return(
        <div className="app">
            <Div1/>
            <Div2/>
            <Div3/>
        </div>
    );
};

export default App;