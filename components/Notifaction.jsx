import React, { useState, useEffect } from "react";

function Notifaction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "We’ll be sendingnotifications to you here",
    "Notify me when any wallets move more than",
    "Notify me when any wallet dormant for",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="container padding_top_50  responsive_container">
      <div className="screen responsive_screen">
        <div className="content">
          <div>
            <div>
              <img src="Bell.svg" alt="bel" />
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

      <div className="screen hidecards responsive_screen">
        <div className="card_wraper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`card  noti_cards_animation ${index === currentSlide ? "active" : ""}`}>
              <div className="card_header">
                <img src="bell_card.svg" alt="" />
                <span>Save</span>
              </div>
              <div className="card_content">{slide}</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifaction;
