import React from "react";

function Notifaction() {
  return (
    <div className="container">
      <div className="screen">
        <div className="content">
          <div>
            <div>
              <img src="bell.svg" alt="bel" />
            </div>
            <h1 className="title">
              Get notified when a highly correlated whale makes a move
            </h1>
            <p className="sub_title">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
        </div>
      </div>

      <div className="screen">
        <div className="card_wraper">
          <div className="card">
            <div className="card_header">
              <img src="bell_card.svg" alt="" />
              <span>Save</span>
            </div>
            <div className="card_content">
            We’ll be sending
notifications to you
here
            </div>
          </div>
          <div className="card">
            <div className="card_header">
              <img src="bell_card.svg" alt="" />
              <span>Save</span>
            </div>
            <div className="card_content">
            We’ll be sending
notifications to you
here
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Notifaction;
