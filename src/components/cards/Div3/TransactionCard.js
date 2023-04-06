import React from 'react';
import "../../css/Div3/TransactionCard.css";
import postIcon from '../../../assets/bearded-man.svg'
import arrIcon from '../../../assets/arrowS.svg';

export default function TransactionCard() {
  return (
    <div className="TCouterStyle">
        <div className="tcHeader">
            <div className="tcTitle">
                <div className="tcDetail">Transaction Detail</div>
                <div className="tcContent">Hi Hira</div>
            </div>
            <div className="tcIcon">
                <img src={postIcon} alt='post-icon'/>
            </div>
        </div>
        <div className="balance">
            <div className="balanceDetail">
                <div className="balanceNumber">$4,763.40</div>
                <div className="balanceText">Available Balance</div>
            </div>
            <div className="accountNumber">****3863</div>            
        </div>
        <div className="photos">
            <div className="arrow">
                <img src={arrIcon} alt="arrow-icon"/>
            </div>
            <div className="pics">
                <img src={postIcon} alt='post-icon'/>
            </div>
            <div className="pics">
                <img src={postIcon} alt='post-icon'/>
            </div>
            <div className="pics">
                <img src={postIcon} alt='post-icon'/>
            </div>
            <div className="pics">
                <img src={postIcon} alt='post-icon'/>
            </div>
        </div>
        <div className="tcFooter">
            <div className="tcButton">
                <button className="tcSend">Send</button>
            </div>
        </div>
    </div>
  )
}
