import './FeaturesSection.css';
import rightDesign from '../assets/images/many_pages.png';
import statistics from '../assets/images/feature_section_1.png';
import transportation from '../assets/images/feature_section_2.png';

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">اكتشف قوة ميزاتنا</h2>
          <p className="features-subtitle">
            لوريم إيبسوم دولور سيت أميت، كونسيكتتور أديبيسسينغ إليت. آينان أوت فولتبات نيسي.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
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
          <div className="feature-card">
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
        </div>
        <div className="feature-card feature-card-wide">
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
      </div>
    </section>
  );
}

export default FeaturesSection;
