import './WorkMethodSection.css';
import AnimatedSection from './AnimatedSection';

function WorkMethodSection() {
  const steps = [
    {
      number: '1',
      description: 'لوريم ايبسوم دولار سيت أميت يوت إنكيديديونت أد إكزيرسيتيشن ك'
    },
    {
      number: '2',
      description: 'لوريم ايبسوم دولار سيت أميت يوت إنكيديديونت أد إكزيرسيتيشن ك'
    },
    {
      number: '3',
      description: 'لوريم ايبسوم دولار سيت أميت يوت إنكيديديونت أد إكزيرسيتيشن ك'
    }
  ];

  return (
    <section className="work-method-section">
      {/* <div className="container"> */}
        <div className="work-method-content">
          <AnimatedSection animationType="fade-in-down" delay={0}>
            <div className="work-method-header">
              <h2 className="section-title"># طريقة عملنا</h2>
              <p className="section-subtitle">
                لوريم ايبسوم دولار سيت أميت سيت كويرات كونسيفيكات كويرات. لابوري دونك، ني
              </p>
            </div>
          </AnimatedSection>
          <div className="work-method-steps">
            <div className="steps-container">
              {steps.map((step, index) => (
                <AnimatedSection 
                  key={index} 
                  animationType="fade-in-up" 
                  delay={index * 200}
                >
                  <div className="step-card hover-lift">
                    <div className="step-number-wrapper">
                      <div className="step-number-circle">
                        <span className="step-number">{step.number}</span>
                      </div>
                    </div>
                    <p className="step-description">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default WorkMethodSection;
