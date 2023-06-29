import React from 'react';
import './FirstPageMain1.css';

function FirstPageMain1() {
  return (
    <div className="main1">
      <h1 className="main1__main__black">Support Your Blood Pressure With</h1>
      <h1 className="main__green">Nitric Oxide Flow</h1>

      <div className="main1__main">
        {/* <img src="./img/Group 1000002063.png" className="App-logo" alt="logo" /> */}

        <div className="main__left">
          <div className="main__left__top">
            <img src="./img/Group_2_3left.png" />
            <img
              style={{ width: '584px', height: '554px' }}
              src="./img/2_3.png"
              className="App-logo"
              alt="logo"
            />
          </div>
          <div className="main__left__bottom">
            <img src="./img/Group_2_3bottom.png" />
          </div>
        </div>

        <div className="main__right">
          <div className="main__right__top">
            <h4>Helps restore blood flow and support normal blood pressure</h4>
          </div>
          <div className="main__right__center">
            <img src="./img/Group 1000002162.png" alt="" />
          </div>
          <div className="main__right__bottom">
            <button className="button1">TRY IT NOW - RISK FREE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPageMain1;
