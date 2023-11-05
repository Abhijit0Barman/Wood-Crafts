import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import sofa from "./sofa.png";
import sofa1 from "./sofa1.png";
import sofa2 from "./sofa2.png";
import sofa3 from "./sofa3.png";
import sofa4 from "./sofa4.png";
import sofa5 from "./sofa5.png";
import home from "./Home.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your FAQ data or define it here
const faqs = [
  { question: 'Question 1', answer: 'Answer to Question 1' },
  { question: 'Question 2', answer: 'Answer to Question 2' },
  // Add more FAQ items here
];

const Homepage: React.FC = () => {
  // State for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 1000); // Change image every 1 second
    return () => clearInterval(interval);
  }, []);

  // Define your image URLs for the slider
  const images = [
    // 'https://picsum.photos/1200/400', // Use the width and height you prefer
    // 'https://picsum.photos/1200/400',
    // 'https://picsum.photos/1200/400',
    "./sofa1.png",
    "./sofa3.png",
    "./sofa4.png",
    // "./sofa.png",
    "./sofa5.png",
    "./sofa2.png",
    // Add more image URLs here
  ];

  // Settings for the image slider (customize as needed)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Auto-advance every 1 second
  };

  return (
    <div>
      <div className="image-slider">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} style={{ width:"50rem",margin:"auto" }} />
            </div>
          ))}
        </Slider>
      </div>
      <img src="./Home.png" alt="" style={{margin:"auto",marginTop:"0px"}} />
      {/* <div className="faqs">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export { Homepage};
