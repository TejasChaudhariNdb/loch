import React, { useState, useEffect } from 'react';

function Notifaction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
    "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
    "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple."
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
    <div className="container padding_top_50">
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
        {slides.map((slide, index) => (
            <div
            key={index}
            className={`card ${index === currentSlide ? 'active' : ''}`}
          >

            <div className="card_header">
              <img src="bell_card.svg" alt="" />
              <span>Save</span>
            </div>
            <div className="card_content">
            {slide}
            </div>
          </div>
           ))}


        </div>
      </div>
    </div>
  );
}

export default Notifaction;
