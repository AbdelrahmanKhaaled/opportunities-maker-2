import './WorkMethodSection.css';

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
          <div className="work-method-header">
            <h2 className="section-title"># طريقة عملنا</h2>
            <p className="section-subtitle">
              لوريم ايبسوم دولار سيت أميت سيت كويرات كونسيفيكات كويرات. لابوري دونك، ني
            </p>
          </div>
          <div className="work-method-steps">
            <div className="steps-container">
              {steps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-number-wrapper">
                    <div className="step-number-circle">
                      <span className="step-number">{step.number}</span>
                    </div>
                  </div>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default WorkMethodSection;
