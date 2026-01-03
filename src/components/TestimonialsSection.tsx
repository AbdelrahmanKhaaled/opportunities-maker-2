import { useState } from 'react';
import './TestimonialsSection.css';
import testimonial_1 from '../assets/images/testimonial_1.png';
import testimonial_2 from '../assets/images/testimonial_2.png';

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'اسم العميل',
      image: testimonial_1,
      quote: 'كلمة.',
      text: 'لوريم ايبسوم دولار سيت أميت إكزيرسيتيشن كويرات أديبيسشينج تيت ماجنا إكس إن أيت إنيم إت أد إن إني'
    },
    {
      name: 'اسم العميل',
      image: testimonial_2,
      quote: 'كلمة.',
      text: 'لوريم ايبسوم دولار سيت أميت إكزيرسيتيشن كويرات أديبيسشينج تيت ماجنا إكس إن أيت إنيم إت أد إن إني'
    },
    {
      name: 'اسم العميل',
      image: testimonial_1,
      quote: 'كلمة.',
      text: 'لوريم ايبسوم دولار سيت أميت إكزيرسيتيشن كويرات أديبيسشينج تيت ماجنا إكس إن أيت إنيم إت أد إن إني'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-text">
            <h2 className="testimonials-title"># اراء عملائنا</h2>
            <p className="testimonials-description">
              لوريم ايبسوم دولار سيت أميت إنفيدونت كويس سيت لامبور نوسترو أيت سيت إنتروليكيشن كونسيكوات. ايبسوم أليكويب أيت كويرات بيريتيتيس. ليجاتوس سيت توب فوليتيات. إيليت، دولار تيت ليجاتوس لابوري لامبور كويرات. ارينتي لابوريس دونك،
            </p>
          </div>
          <div className="testimonials-cards">
            <div className="testimonials-slider">
              <div 
                className="testimonials-track"
                style={{ transform: `translateX(${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">
                        <img src={testimonial.image} alt={testimonial.name} className="avatar-img" />
                      </div>
                      <p className="testimonial-name">{testimonial.name}</p>
                    </div>
                    <div className="testimonial-content">
                      <p className="testimonial-quote">{testimonial.quote}</p>
                      <p className="testimonial-text">{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                className="slider-button slider-button-prev"
                onClick={goToPrevious}
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="slider-button slider-button-next"
                onClick={goToNext}
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="testimonials-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
