import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Here is my Matrimony Application UI Development</h1>
        <p className="hero-description">
          Discover new connections, opportunities, and experiences tailored just for you.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => window.location.href = '/signup'}>
            Join Now
          </button>
          <button className="btn-secondary" onClick={() => window.location.href = '/learn-more'}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
