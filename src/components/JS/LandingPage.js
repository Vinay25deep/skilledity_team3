import React, { useEffect, useState } from 'react';
import Header from './Navbar1';
import '../CSS/LandingPage.css';

const words = ["skilledity", "Integrity", "Excellence"];

function LandingPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [nextWordIndex, setNextWordIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      const nextIndex = (currentWordIndex + 1) % words.length;
      setNextWordIndex(nextIndex);

      setTimeout(() => {
        setCurrentWordIndex(nextIndex);
        setIsFading(false);
      }, 1000); 
    }, 1500); 

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <>
      <Header />
      <div className="landing-container">
        <div className="landing-content">
          <h1>
            Master your future<br />
            with 
            <span className="highlight2">
              <span className={`word ${isFading ? 'fade-out' : 'fade-in'}`}>
                {words[currentWordIndex]}
              </span>
              <span className={`word ${isFading ? 'fade-in' : 'fade-out'}`}>
                {words[nextWordIndex]}
              </span>
            </span>
          </h1>
          <p>
            Skilledity is your one-stop-shop for upscaling. Get maximum value
            for time and resources you invest, with job-ready courses & 
            high-technology, available at the lowest cost.
          </p>
          <button className="explore-button">Brochure</button>
        </div>
        <div className="landing-image-container">
          <img
            src="SVGs/Landing1.png"
            alt="Landing Graphic"
            className="landing-image"
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;


