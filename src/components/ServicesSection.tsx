import './ServicesSection.css';
import AnimatedSection from './AnimatedSection';

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-content">
          <AnimatedSection animationType="fade-in-down" delay={0}>
            <h2 className="services-title"># خدماتنا</h2>
          </AnimatedSection>
          <AnimatedSection animationType="fade-in-up" delay={200}>
            <div className="service-card hover-lift">
              <div className="service-icon"></div>
              <p className="service-text">
                تأسيس الشركات الأجنبية في المملكة العربية السعودية
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
