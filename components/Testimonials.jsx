import React, { useRef, useState } from "react";

function Testimonials() {
  const slides = [
    "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
    "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
    "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple."
  ];

  const carouselRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scrolling speed by changing the multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1 className="testi_title">Testimonials</h1>
          <div className="divider"></div>

<div className="flex">


          <img src="logo.svg" className="logo" alt="" />

          <div
            className="carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {slides.map((slide, index) => (
              <div key={index} className="card testicard">
                <div className="testi_card_header">
                  <div>
                    <span className="testi_name">Jack F</span> <span className="testi_pos">Ex Blackrock PM</span>
                  </div>
                </div>
                <div className="card_content noti_content">{slide}</div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Testimonials;
