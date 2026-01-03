import './FeaturesSection.css';
import rightDesign from '../assets/images/many_pages.png';
import statistics from '../assets/images/feature_section_1.png';
import transportation from '../assets/images/feature_section_2.png';
import AnimatedSection from './AnimatedSection';

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <AnimatedSection animationType="fade-in-down" delay={0}>
          <div className="features-header">
            <h2 className="features-title">اكتشف قوة ميزاتنا</h2>
            <p className="features-subtitle">
              لوريم إيبسوم دولور سيت أميت، كونسيكتتور أديبيسسينغ إليت. آينان أوت فولتبات نيسي.
            </p>
          </div>
        </AnimatedSection>
        <div className="features-grid">
          <AnimatedSection animationType="fade-in-right" delay={100}>
            <div className="feature-card hover-lift">
              <div className="feature-content">
                <div className="feature-header-item">
                  <div className="feature-dot"></div>
                  <h3 className="feature-title">تحليل صحيح</h3>
                </div>
                <p className="feature-description">
                  لوريم إيبسوم دولور سيت أميت كونسيكتتور أديبيسسينغ إليت. آينان أوت فولتبات نيسي. نولا فيفيرا أوديو نيك ريسوس فيهيكولا لوكتوس.
                </p>
              </div>
              <div className="feature-image">
                <img 
                  src={rightDesign} 
                  alt="Feature illustration" 
                  className="feature-img"
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-in-left" delay={200}>
            <div className="feature-card hover-lift">
              <div className="feature-content">
                <div className="feature-header-item">
                  <div className="feature-dot"></div>
                  <h3 className="feature-title">التقارير والتحليلات</h3>
                </div>
                <p className="feature-description">
                  لوريم إيبسوم دولور سيت أميت كونسيكتتور أديبيسسينغ إليت. آينان أوت فولتبات نيسي. نولا فيفيرا أوديو نيك ريسوس فيهيكولا لوكتوس.
                </p>
              </div>
              <div className="feature-image">
                <img 
                  src={statistics} 
                  alt="Feature illustration" 
                  className="feature-img"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection animationType="fade-in-up" delay={300}>
          <div className="feature-card feature-card-wide hover-lift">
            <div className="feature-content">
              <div className="feature-header-item">
                <div className="feature-dot"></div>
                <h3 className="feature-title">استمتع بنقل مجاني إلى أي وجهة في جميع أنحاء العالم</h3>
              </div>
              <p className="feature-description">
                لوريم إيبسوم دولور سيت أميت كونسيكتتور أديبيسسينغ إليت. آينان أوت فولتبات نيسي. نولا فيفيرا أوديو نيك ريسوس فيهيكولا لوكتوس.
              </p>
            </div>
            <div className="feature-image">
              <img 
                src={transportation} 
                alt="Feature illustration" 
                className="feature-img"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default FeaturesSection;
