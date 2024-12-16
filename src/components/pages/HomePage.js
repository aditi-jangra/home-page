import React from 'react';
import HeroSection from '../HeroSection';
import Testimonials from '../Testimonials';
import Footer from '../Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <section>
        <h2>How It Works</h2>
        <p>Our platform connects you with your perfect match seamlessly.</p>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
