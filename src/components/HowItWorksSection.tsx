import './HowItWorksSection.css';
import video from '../assets/images/HowItWorksSection.png';
import AnimatedSection from './AnimatedSection';

function HowItWorksSection() {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="how-it-works-content">
          <AnimatedSection animationType="fade-in-right" delay={0}>
            <div className="how-it-works-text">
              <h2 className="section-title"># كيف تعمل خدماتنا ؟</h2>
              <p className="section-description">
                لوريم ايبسوم دولار سيت أميت يوت دونك، ميو كويس لامبور إي نوسترو كويس كويرات. كونسيكوات. يوت أليكوي دونك، يوت كونسيكوات. إنيم ديتيكتورمي ديواس إيليت، ماجنا إي ديتيكتورمي كونسيكتيتور كويس ديواس إنكيديديونت نيسيوت أولامكو نوسترو إنيم لابوري نويس إيليت، أليكوي.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="zoom-in" delay={300}>
            <div className="video-container">
              <div className="video-frame hover-scale">
                <img 
                  src={video} 
                  alt="Video thumbnail" 
                  className="video-thumbnail"
                />
                <div className="play-button animate-pulse">
                  <div className="play-button-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                      </svg>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
