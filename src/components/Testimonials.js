import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", feedback: "This platform is amazing!" },
    { name: "Jane Smith", feedback: "A wonderful experience." },
    { name: "Mike Johnson", feedback: "Highly recommended!" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <h2>Testimonials</h2>
      <p>{testimonials[currentIndex].feedback}</p>
      <h4>- {testimonials[currentIndex].name}</h4>
      <button onClick={prevTestimonial}>Previous</button>
      <button onClick={nextTestimonial}>Next</button>
    </div>
  );
};

export default Testimonials;
